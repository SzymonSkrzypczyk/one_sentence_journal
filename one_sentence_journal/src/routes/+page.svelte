<script lang="ts">
  import HistoryView from '../components/HistoryView.svelte';
  export let data: { sentences: { date: string; text: string }[] };
</script>

<main>
  <h1 class="page-title">Moje Przemyślenia ;D</h1>
  <div class="wrapper">
    <HistoryView sentences={data.sentences} />

  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    padding: 2rem 1rem;
    background-color: #ffffff;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  .page-title {
    font-family: 'Inter', sans-serif;
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-align: center;
    border-bottom: 2px solid #000;
    padding-bottom: 0.5rem;
    width: 100%;
    max-width: 672px;
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

    .page-title {
      font-size: 2rem;
      margin-bottom: 1rem;
      padding-bottom: 0.4rem;
    }
  }

  @media (max-width: 480px) {
    .wrapper {
      padding: 0.5rem;
    }

    .page-title {
      font-size: 1.6rem;
      margin-bottom: 0.75rem;
      padding-bottom: 0.3rem;
    }
  }
</style>
