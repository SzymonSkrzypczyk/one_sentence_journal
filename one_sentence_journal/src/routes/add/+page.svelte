<script lang="ts">
	import { goto } from '$app/navigation';

	let sentence = '';

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		console.log('Submitted sentence:', sentence);
		goto('/');
	}
</script>

<div class="add-wrapper">
	<form class="add-form" on:submit={handleSubmit}>
		<h1>Add a Sentence</h1>

		<label for="sentence">Write your sentence:</label>
		<input
			type="text"
			id="sentence"
			name="sentence"
			bind:value={sentence}
			placeholder="Today I learned..."
			required
		/>

		<button type="submit">Save</button>
	</form>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

	body {
		margin: 0;
		font-family: 'Patrick Hand', cursive;
		background: #fdfdfd;
	}

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
