<script>
  import HistoryView from '../components/HistoryView.svelte';
</script>

<main>
  <div class="wrapper">
    <HistoryView />
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 2rem 1rem;
    background-color: #ffffff;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  .wrapper {
    width: 100%;
    max-width: 672px; /* 42rem */
    box-sizing: border-box;
  }
</style>
