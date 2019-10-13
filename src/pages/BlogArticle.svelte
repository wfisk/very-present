<script>
	import {send, receive} from 'src/transitions/crossfade';
  import { fly } from 'svelte/transition';

  import posts from 'src/config/posts.json';
  // export let post;
  
  export let params = {};
  let post = { title: "", slug: "", html: "" };

  $: console.log( {params} );
  $: post = posts.find( it => it.slug === params.slug );
  
</script>

<style>
	img {
	  max-width: 50px;
	}
	/*
																							By default, CSS is locally scoped to the component,
																							and any unused styles are dead-code-eliminated.
																							In this page, Svelte can't know which elements are
																							going to appear inside the {{{post.html}}} block,
																							so we have to use the :global(...) modifier to target
																							all elements inside .content
																						*/
	.content :global(h2) {
	  font-size: 1.4em;
	  font-weight: 500;
	}

	.content :global(pre) {
	  background-color: #f9f9f9;
	  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
	  padding: 0.5em;
	  border-radius: 2px;
	  overflow-x: auto;
	}

	.content :global(pre) :global(code) {
	  background-color: transparent;
	  padding: 0;
	}

	.content :global(ul) {
	  line-height: 1.5;
	}

	.content :global(li) {
	  margin: 0 0 0.5em 0;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>


<main transition:fly="{{ x: 50, duration: 300 }}">
<h1 in:receive={{key: post.slug}}>
<img out:send="{{key: 'borat'}}" in:receive="{{key: 'borat'}}" alt='Borat' src='/meow.png'>
{post.title}
</h1>

<div class='content'>
	{@html post.html}
</div>
</main>
