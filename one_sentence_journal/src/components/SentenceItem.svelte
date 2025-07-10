<script>
  export let date;
  export let text;
</script>

<div class="sentence">
  <span class="date">{date}</span>
  <p>{text}</p>
</div>

<style>
  .sentence {
    position: relative;
    padding: 10px;
    margin-bottom: 15px;
    background-color: #fff;
    border: 1px dashed #000;
  }

  .sentence:hover {
    background-color: #ffffaa;
  }

  .sentence p {
    font-size: 1.1em;
    line-height: 1.3;
    color: #000;
    margin: 0;
  }

  .date {
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
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    white-space: nowrap;
    z-index: 10;
  }

  .sentence:hover .date {
    opacity: 1;
  }
</style>
