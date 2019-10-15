<style>
  svg {
    width: 100%;
    height: auto;
  }

  svg rect {
    will-change: transform;
  }

</style>

<script>
  import { onMount } from "svelte";
  import anime from 'animejs/lib/anime.es.js';

  let rect;


  // onRectClick
  function onRectClick(event){
    anime({
      targets: rect,
      translateX: 500,
      translateZ: 0,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });
    
  }

  onMount( function(){
    rect.setAttribute("x",120);
  });
</script>

<main>
    <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <!-- Simple rectangle -->
      <rect width="80" height="80" bind:this={rect} on:click={onRectClick}/>
    
    </svg>
</main>