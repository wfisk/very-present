<script>
  import { onMount } from 'svelte';
  import { fade, fly, slide, scale, draw, crossfade } from 'svelte/transition';
  import Prism from 'prismjs';
  onMount( function(){
    Prism.highlightAll();
  });

  let style='p { color: #006e51; }';


</script>


<svelte:head>
	<title>First</title>
</svelte:head>


<div>
    <h1>First Slide</h1>

    <p>This is the 'about' page. There's not much here.</p>

    <pre>
        <code class="language-js">
          let x = 5;
       </code>
    </pre>
    
    <pre><code class="language-css match-braces rainbow-braces">{style}</code></pre>

</div>
