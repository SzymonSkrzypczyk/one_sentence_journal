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
    max-width: 672px;
    box-sizing: border-box;
    padding: 1rem;
    border: 2px solid #000000;
    background-color: #ffffff;
  }

  @media (max-width: 768px) {
    main {
      padding: 1rem 0.5rem;
    }

    .wrapper {
      padding: 0.75rem;
      border-width: 1px;
    }
  }

  @media (max-width: 480px) {
    .wrapper {
      padding: 0.5rem;
    }
  }
</style>
