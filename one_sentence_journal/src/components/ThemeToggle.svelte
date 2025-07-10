<script>
  import { onMount } from 'svelte';

  export let isDark = false;

  // shout out to this wonderful design https://uiverse.io/Madflows/fresh-fireant-15 !!!
  function toggleTheme(event) {
    isDark = event.target.checked;
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }

  onMount(() => {
    const saved = localStorage.getItem('theme') || 'light';
    isDark = saved === 'dark';
    document.documentElement.dataset.theme = saved;
  });
</script>

<div class="toggle-switch" aria-label="Przełącz tryb jasny/ciemny" role="switch" aria-checked={isDark}>
  <label class="switch-label">
    <input
      type="checkbox"
      class="checkbox"
      bind:checked={isDark}
      on:change={toggleTheme}
      aria-hidden="true"
    />
    <span class="slider"></span>
  </label>
</div>

<style>
  .toggle-switch {
    position: fixed;
    top: 1rem;
    right: 1rem;
    width: 100px;
    height: 50px;
    --light: #d8dbe0;
    --dark: #28292c;
    --link: rgb(27, 129, 112);
    --link-hover: rgb(24, 94, 82);
    z-index: 1000;
    user-select: none;
  }

  .switch-label {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--dark);
    border-radius: 25px;
    cursor: pointer;
    border: 3px solid var(--dark);
  }

  .checkbox {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    transition: background-color 0.3s;
  }

  .checkbox:checked + .slider {
    background-color: var(--light);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    box-shadow: inset 12px -4px 0 0 var(--light);
    background-color: var(--dark);
    transition: transform 0.3s, background-color 0.3s;
  }

  .checkbox:checked + .slider::before {
    transform: translateX(50px);
    background-color: var(--dark);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    .toggle-switch {
      width: 80px;
      height: 40px;
      top: 0.5rem;
      right: 0.5rem;
    }

    .switch-label {
      height: 40px;
    }

    .slider::before {
      top: 7px;
      left: 7px;
      width: 20px;
      height: 20px;
    }

    .checkbox:checked + .slider::before {
      transform: translateX(40px);
    }
  }
</style>
