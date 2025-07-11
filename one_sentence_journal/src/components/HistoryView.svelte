<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  // Mock data, replace with your real data source or props
  let sentences = [
    { date: '2025-07-10', text: 'Dziś jest piękny dzień, pełen słońca.' },
    { date: '2025-07-09', text: 'Wczoraj padało, ale i tak było miło.' },
    { date: '2025-07-08', text: 'Nowe wyzwania czekają, jestem gotowy.' },
    { date: '2025-07-07', text: 'Poniedziałek to zawsze dobry początek.' },
    { date: '2025-07-06', text: 'Weekend minął zbyt szybko.' },
    { date: '2025-07-05', text: 'Spotkanie z przyjaciółmi zawsze poprawia humor.' },
    { date: '2025-07-04', text: 'Nowa książka wciągnęła mnie bez reszty.' },
    { date: '2025-07-03', text: 'Dzień pełen produktywności.' },
    { date: '2025-07-02', text: 'Małe gesty potrafią sprawić największą radość.' },
    { date: '2025-07-01', text: 'Czas na nowe cele i marzenia.' },
    { date: '2025-06-30', text: 'Koniec miesiąca to dobry moment.' },
    { date: '2025-06-29', text: 'Spokojny wieczór w domu.' }
  ];

  // Reactive page size based on window width
  let pageSize = 10;
  let currentPage = 1;

  function updatePageSize() {
    pageSize = window.innerWidth < 768 ? 5 : 10;
    currentPage = 1; // reset to first page when size changes
  }

  onMount(() => {
    updatePageSize();
    window.addEventListener('resize', updatePageSize);
    return () => window.removeEventListener('resize', updatePageSize);
  });

  // Compute the sentences for current page
  $: start = (currentPage - 1) * pageSize;
  $: end = start + pageSize;
  $: pageSentences = sentences.slice(start, end);

  const totalPages = () => Math.ceil(sentences.length / pageSize);

  function prevPage() {
    if (currentPage > 1) currentPage -= 1;
  }
  function nextPage() {
    if (currentPage < totalPages()) currentPage += 1;
  }
</script>

<div class="history-container">
  <div class="scrollable-list">
    {#each pageSentences as item}
      <div class="sentence-item">
        <span class="date-display">{item.date}</span>
        <p>{item.text}</p>
      </div>
    {/each}
  </div>

  <div class="pagination-controls">
    <button on:click={prevPage} disabled={currentPage === 1}>Poprzednia</button>
    <span>{currentPage} / {totalPages()}</span>
    <button on:click={nextPage} disabled={currentPage === totalPages()}>Następna</button>
  </div>
</div>

<style>
  .history-container {
    display: flex;
    flex-direction: column;
    height: 70vh;
    border: 2px solid #000000;
    background-color: #f8f8f8;
    box-sizing: border-box;
  }

  .scrollable-list {
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 15px;
  }

  .sentence-item {
    position: relative;
    padding: 10px;
    margin-bottom: 15px;
    background-color: #ffffff;
    border: 1px dashed #000000;
  }

  .sentence-item:last-child {
    margin-bottom: 0;
  }

  .date-display {
    position: absolute;
    top: -10px;
    left: 5px;
    background-color: #ffff99;
    color: #000;
    font-family: 'Gochi Hand', cursive;
    font-size: 0.8rem;
    padding: 3px 8px;
    border: 1px solid #000;
    border-radius: 5px;
    white-space: nowrap;
  }

  .pagination-controls {
    padding: 10px;
    border-top: 2px solid #000000;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  button {
    background-color: #000;
    color: #fff;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
  }

  button:disabled {
    background-color: #888;
    cursor: default;
  }
</style>
