<script>
  import { send, receive } from "src/transitions/crossfade";
</script>

<style>
	h1,
	p {
	  text-align: center;
	  margin: 0 auto;
	}

	h1 {
	  font-size: 2.8em;
	  text-transform: uppercase;
	  font-weight: 700;
	  margin: 0 0 0.5em 0;
	}

	h1 span {
	  position: relative;
	  display: inline-block;
	}
	img {
	  width: 100%;
	  max-width: 100px;
	  vertical-align: baseline;
	}

	p {
	  margin: 1em auto;
	}

	@media (min-width: 480px) {
	  h1 {
	    font-size: 4em;
	  }
	}
</style>

<main>
<h1>
	<span out:send="{{key: 'title'}}" in:receive="{{key: 'title'}}">HOT HOT HOT</span>
	<img out:send="{{key: 'borat'}}" in:receive="{{key: 'borat'}}" alt='meow' src='meow.png'>
</h1>

<p out:send="{{key: 'text'}}" in:receive="{{key: 'text'}}"><strong>Try editing this file (src/routes/about.svelte) to test live reloading.</strong></p>
</main>