<script>
  // https://github.com/prettier/eslint-plugin-prettier
  // https://github.com/UnwrittenFun/prettier-plugin-svelte
  // https://github.com/sveltejs/eslint-plugin-svelte3
  export let name;

  import { onMount, setContext } from 'svelte';
  
  import Router from 'svelte-spa-router'
  import {location} from 'svelte-spa-router'

  import Nav from 'src/components/Nav.svelte';

  import AboutPage from 'src/pages/About.svelte';
  import AnimationPage from 'src/pages/Animation.svelte';
  import BlogPage from 'src/pages/Blog.svelte';
  import BlogArticlePage from 'src/pages/BlogArticle.svelte';
  import ChartPage from 'src/pages/Chart.svelte';
  import IndexPage from 'src/pages/Index.svelte';
  import MorePage from 'src/pages/More.svelte';
  import NotFoundPage from 'src/pages/NotFound.svelte';



  const routes = {
    // Exact path
    '/':          IndexPage,
    "/about":     AboutPage,
    "/animation":  AnimationPage,
    "/blog/:slug":  BlogArticlePage,
    "/blog":      BlogPage,
    "/chart":     ChartPage,
    "/more":      MorePage,
    '*':          NotFoundPage,
  };


  onMount( function(){
    
  });
</script>

<style global lang="scss" >
  @import "styles/global.scss"; 

  
	main {
	  max-width: 56em;
	  background-color: white;
	  padding: 2em;
	  margin: 0 auto;
	  box-sizing: border-box;
	}
</style>

<template>
    <Nav path="{$location}" />
    <div class="container-fluid">
    <Router {routes} />
  </div>
</template>