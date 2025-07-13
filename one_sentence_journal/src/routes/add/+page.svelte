<script lang="ts">
	import { goto } from '$app/navigation';
	import { onDestroy } from 'svelte';

	let sentence = '';
	let message = '';
	let messageType: 'success' | 'error' | '' = '';

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		if (!sentence.trim()) {
			message = 'Please enter a sentence.';
			messageType = 'error';
			return;
		}

		try {
			const res = await fetch('/add-sentence', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ sentence })
			});

			if (res.ok) {
				message = 'Sentence saved successfully!';
				messageType = 'success';
				sentence = '';

				setTimeout(() => {
					goto('/');
				}, 1000);
			} else {
				const data = await res.json();
				message = data.error ?? 'Failed to save sentence.';
				messageType = 'error';
			}
		} catch (err) {
			message = 'Network error, please try again.';
			messageType = 'error';
		}
	}

	function logout() {
		fetch('/logout', { method: 'POST', credentials: 'include' }).catch(() => {});
	}

	if (typeof window !== 'undefined') {
		window.addEventListener('beforeunload', logout);
		window.addEventListener('visibilitychange', () => {
			if (document.visibilityState === 'hidden') logout();
		});
	}

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('beforeunload', logout);
			window.removeEventListener('visibilitychange', () => {
				if (document.visibilityState === 'hidden') logout();
			});
		}
	});
</script>

<div class="add-wrapper">
	<form class="add-form" on:submit={handleSubmit}>
		<h1>Dodaj dzisiejsze przemyślenie</h1>

		<label for="sentence">Dzisiejsza myśl:</label>
		<input
			type="text"
			id="sentence"
			name="sentence"
			bind:value={sentence}
			placeholder="Dzisiaj..."
			required
		/>

		<button type="submit">Zapisz</button>

		{#if message}
			<p class={messageType === 'success' ? 'message-success' : 'message-error'}>
				{message}
			</p>
		{/if}
	</form>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

	.add-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		padding: 1rem;
		box-sizing: border-box;
	}

	.add-form {
		background: #ffffff;
		border: 2px solid #000000;
		width: 100%;
		max-width: 30rem;
		padding: 2rem;
		box-sizing: border-box;
		text-align: center;
		box-shadow: 4px 4px 0 #000000;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	h1 {
		margin-bottom: 0.5rem;
		border-bottom: 2px solid #000;
		padding-bottom: 0.5rem;
	}

	label {
		font-weight: 600;
		text-align: left;
	}

	input[type="text"] {
		padding: 0.75rem;
		border: 2px solid #000;
		background: #fefefe;
		box-shadow: inset 2px 2px 0 #ccc;
		font-family: 'Patrick Hand', cursive;
	}

	button[type="submit"] {
		background: #ffffff;
		color: #000000;
		border: 2px solid #000;
		padding: 0.75rem;
		font-family: 'Patrick Hand', cursive;
		font-size: 1.1em;
		cursor: pointer;
		box-shadow: 2px 2px 0 #000;
		transition: all 0.1s ease-in-out;
	}

	button[type="submit"]:hover {
		transform: translate(1px, 1px);
		box-shadow: 1px 1px 0 #000;
	}

	.message-success {
		color: green;
		font-weight: 700;
	}

	.message-error {
		color: red;
		font-weight: 700;
	}

	@media (max-width: 480px) {
		.add-form {
			padding: 1.5rem;
		}

		h1 {
			font-size: 1.5em;
		}

		button[type="submit"] {
			font-size: 1em;
		}
	}
</style>
