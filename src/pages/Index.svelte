<script>
	import { send, receive } from "src/transitions/crossfade";
</script>

<style>
	h1,
	figure,
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

	figure {
	  margin: 0 0 1em 0;
	}

	img {
	  width: 100%;
	  max-width: 200px;
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
  <span out:send="{{key: 'title'}}" in:receive="{{key: 'title'}}">INDEX PAGE</span>
</h1>

<figure>
	<img out:send="{{key: 'borat'}}" in:receive="{{key: 'borat'}}" alt='Meow' src='meow.png'>
	<figcaption>MEOW!</figcaption>
</figure>

<p out:send="{{key: 'text'}}" in:receive="{{key: 'text'}}">
  Hi I'm
	<strong>
		 <a href="https://twitter.com/buhrmiday">buhrmi</a>
	</strong>
	and I made this for you.
	Come say hi.
</p>

</main>