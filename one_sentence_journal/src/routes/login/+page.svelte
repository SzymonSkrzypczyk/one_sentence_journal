<form method="POST">
  <label>
    Username:
    <input type="text" name="username" required />
  </label>

  <label>
    Password:
    <input type="password" name="password" required />
  </label>

  <button type="submit">Login</button>

  {#if form?.invalid}
    <p style="color: red;">Invalid username or password</p>
  {/if}
</form>

<script>
  export let form;
</script>
