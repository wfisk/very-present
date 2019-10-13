<script>
 import {send, receive} from 'src/transitions/crossfade';
 import { fly } from 'svelte/transition';
 import posts from 'src/config/posts.json';

 $: console.log( { posts } );
</script>

<style>
	ul {
	  margin: 0 0 1em 0;
	  line-height: 1.5;
	}
	img {
	  max-width: 50px;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<main transition:fly="{{ x: -50, duration: 300 }}">
	
	<h1>
	Recent posts
	<img out:send="{{key: 'borat'}}" in:receive="{{key: 'borat'}}" alt='Borat' src='/meow.png'>
	</h1>

	<ul>
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a out:send={{key: post.slug}} rel='prefetch' href='#/blog/{post.slug}'>{post.title}</a></li>
		{/each}
	</ul>
</main>