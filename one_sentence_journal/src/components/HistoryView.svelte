<script>
  import SentenceItem from './SentenceItem.svelte';

  const sentences = [
    { date: '2025-07-10', text: 'Dziś jest piękny dzień, pełen słońca. Cieszę się każdą chwilą.' },
    { date: '2025-07-09', text: 'Wczoraj padało, ale i tak było miło spędzić czas w domu z książką.' },
    { date: '2025-07-08', text: 'Nowe wyzwania czekają, jestem gotowy na wszystko, co przyniesie ten tydzień.' },
    // ... więcej
  ];
</script>

<div class="container">
  <h1>Moja Historia</h1>
  <div class="scrollable">
    {#each sentences as { date, text } (date)}
      <SentenceItem {date} {text} />
    {/each}
  </div>
</div>

<style>
  .container {
    max-width: 42rem;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    border: 2px solid #000;
    background-color: #fff;
    box-sizing: border-box;
  }

  h1 {
    font-size: 2.8em;
    color: #000;
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 2px solid #000;
    padding-bottom: 10px;
    line-height: 1;
    font-family: 'Inter', sans-serif;
  }

  .scrollable {
    max-height: 70vh;
    overflow-y: auto;
    border: 2px solid #000;
    background-color: #f8f8f8;
    padding: 15px;
    box-sizing: border-box;
  }

  .scrollable::-webkit-scrollbar {
    width: 12px;
  }

  .scrollable::-webkit-scrollbar-track {
    background: #f8f8f8;
  }

  .scrollable::-webkit-scrollbar-thumb {
    background-color: #808080;
  }
</style>
