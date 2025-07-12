<script>
    import { page } from '$app/stores';
</script>

<div class="login-wrapper">
	<div class="login-container">
		<h1>Logowanie</h1>

		<form method="POST">
			<label for="username">
				Nazwa użytkownika:
				<input type="text" id="username" name="username" required />
			</label>

			<label for="password">
				Hasło:
				<input type="password" id="password" name="password" required />
			</label>

			<button type="submit">Zaloguj</button>

            {#if $page.form?.invalid}
			    <p class="error-message hidden">Nieprawidłowa nazwa użytkownika lub hasło</p>
            {/if}
		</form>
	</div>
</div>

<style>
	.login-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		padding: 1rem;
		box-sizing: border-box;
		background-color: #ffffff;
	}

	.login-container {
		background-color: #ffffff;
		border: 2px solid #000000;
		width: 100%;
		max-width: 24rem;
		padding: 2rem;
		box-sizing: border-box;
		text-align: center;
	}

	h1 {
		font-family: 'Inter', sans-serif;
		font-size: 2em;
		color: #000000;
		margin-bottom: 1.5rem;
		border-bottom: 2px solid #000000;
		padding-bottom: 0.5rem;
		line-height: 1;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		text-align: left;
	}

	label {
		font-family: 'Inter', sans-serif;
		font-size: 1em;
		font-weight: 600;
	}

	input[type="text"],
	input[type="password"] {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid #000000;
		background-color: #f8f8f8;
		font-family: 'Inter', sans-serif;
		font-size: 1em;
		color: #000000;
		box-sizing: border-box;
	}

	input[type="text"]:focus,
	input[type="password"]:focus {
		outline: 2px solid #000000;
		outline-offset: 2px;
		background-color: #ffffff;
	}

	button[type="submit"] {
		background-color: #000000;
		color: #ffffff;
		border: 2px solid #000000;
		padding: 0.75rem 1.5rem;
		font-family: 'Inter', sans-serif;
		font-size: 1.1em;
		cursor: pointer;
		transition: background-color 0.1s ease-in-out;
		margin-top: 1rem;
	}

	button[type="submit"]:hover {
		background-color: #333333;
	}

	.error-message {
		color: #ff0000;
		font-family: 'Inter', sans-serif;
		font-size: 0.9em;
		margin-top: 0.5rem;
		text-align: center;
	}

	@media (max-width: 480px) {
		.login-container {
			padding: 1.5rem;
		}

		h1 {
			font-size: 1.5em;
		}

		button[type="submit"] {
			font-size: 1em;
			padding: 0.6rem 1.2rem;
		}
	}
</style>
