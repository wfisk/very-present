<script>
  import { onMount } from 'svelte';
    import { fade, fly, slide, scale, draw, crossfade } from 'svelte/transition';
    import Prism from 'prismjs';
    import 'prismjs/plugins/line-highlight/prism-line-highlight';
    import 'prismjs/plugins/line-numbers/prism-line-numbers';
  onMount( function(){
    Prism.highlightAll();
  });


</script>

<style>
  @import "prismjs/plugins/line-highlight/prism-line-highlight.css";
</style>

<svelte:head>
	<title>Third</title>
</svelte:head>

<div>
    <h1>Third Slide</h1>

    
    <pre class="line-highlight line-numbers language-js" data-line="2-3">
      <code class="language-js">
{ `
    <script>
      import { onMount } from 'svelte';
      import { fade, fly, slide, scale, draw, crossfade } from 'svelte/transition';
      import Prism from 'prismjs';
    onMount( function(){
      Prism.highlightAll();
    });

    let code = 
    import { fade, fly, slide, scale, draw, crossfade } from svelte/transition
    import { fade, fly, slide, scale, draw, crossfade } from svelte/transition
    import { fade, fly, slide, scale, draw, crossfade } from svelte/transition
    import { fade, fly, slide, scale, draw, crossfade } from svelte/transition
  ;

  </script>

  <svelte:head>
    <title>Third</title>
  </svelte:head>

  <div>
      <h1>Third Slide</h1>

      
      <pre>
        <code class="language-js">
          {code}
        </code>
    </pre>

    <p>This is the 'about' page. There's not much here.</p>
  </div>
`}


           </code>
  </pre>

  <p>This is the 'about' page. There's not much here.</p>
</div>
