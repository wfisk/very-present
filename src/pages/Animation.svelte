<style>
  svg {
    width: 100%;
    height: 50vh;
  }

  svg rect {
    will-change: transform;
  }

  .bar {
    background-color: orange;
    height: 20px;
    width: 200px;
  }

</style>

<script>
  import { onMount } from "svelte";
  import anime from 'animejs/lib/anime.es.js';

  let rect;


  // on Button Click
  function onButtonClick(event){
    anime({
      targets: '.bar',
      rotate: 90,
      easing: 'linear',
      delay: anime.stagger(300, {from: 'last'})
    });


  }


  // onRectClick
  function onRectClick(event){
    anime({
      targets: rect,
      translateY: 200,
      scaleY: 0.75,
      scaleX: 1.25,
      opacity: 0.75,
      easing: 'easeOutQuad',
      fill: '#e7f'
    });
    
  }

  onMount( function(){
    rect.setAttribute("x",120);
  });
</script>

<main>
    <button class="button is-primary" on:click={onButtonClick}>Play</button>
    <h2>Animation</h2>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>

    <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <!-- Simple rectangle -->
      <rect width="80" height="80" bind:this={rect} on:click={onRectClick}/>
    
    </svg>


</main>