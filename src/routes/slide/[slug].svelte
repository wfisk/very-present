<script context="module">
    export function preload({ params, query }) {
      return { slug: params.slug };
    }
</script>


<script>
    import slide_01 from 'src/slides/slide_01.svelte';
    import slide_02 from 'src/slides/slide_02.svelte';
    import slide_03 from 'src/slides/slide_03.svelte';
    import { goto, stores } from '@sapper/app';
    import { fly } from 'svelte/transition';

    // export let params = {};
    const { preloading, page, session } = stores();
    // const { host, path, params, query } = page;

    let currentSlug = 0;
    let priorSlug = 0;

    $: number = parseInt( $page.params.slug, 10 );

    page.subscribe( ({ params }) => { 
      priorSlug = currentSlug;
      currentSlug = params.slug;
    } )

    // export let number = 1;
    let slide = null;

    $: switch ( number || 0 ) {
      case 1: slide=slide_01; break;
      case 2: slide=slide_02; break;
      case 3: slide=slide_03; break;
    }
  
    function onKeydown( event ) {
      if ( event.keyCode === 33 ) {
        console.log('pageup');
        goto('slide/2');
      }
      else if ( event.keyCode === 34 ) {
        console.log('pagedown');
        goto('slide/3');
      }
    }
  </script>
  
  
  <svelte:head>
    <title>First</title>
  </svelte:head>
  <svelte:window on:keydown={onKeydown}></svelte:window>
  
  {#if number % 2}
  <div class="slide-{{number}}" style="position:absolute;" in:fly={{x:1000}} out:fly={{x:-1000}}>
  <svelte:component this={slide} ></svelte:component>
  </div>
  {:else}
  <div class="slide-{{number}}" style="position:absolute;" in:fly={{x:1000}} out:fly={{x:-1000}}>
    <svelte:component this={slide} ></svelte:component>
   </div>
    
  {/if}
  