<script>
  // https://github.com/prettier/eslint-plugin-prettier
  // https://github.com/UnwrittenFun/prettier-plugin-svelte
  // https://github.com/sveltejs/eslint-plugin-svelte3
  export let name;

  import { onMount, setContext } from 'svelte';
  import { authState } from 'rxfire/auth';
  
  import Router from 'svelte-spa-router'
  import {location} from 'svelte-spa-router'

  import Footer from 'src/components/Footer';
  import Navigation from 'src/components/Navigation';

  import AboutPage from 'src/pages/About.svelte';
  import GroupPage from 'src/pages/Group.svelte';
  import HomePage from 'src/pages/Home.svelte';
  import IndexPage from 'src/pages/Index.svelte';
  import NotFoundPage from 'src/pages/NotFound.svelte';
  import PlacePage from 'src/pages/Place.svelte';



  const routes = {
    // Exact path
    '/':          HomePage,
    "/group":     GroupPage,
    "/index":     IndexPage,
    "/place":     PlacePage,
    '*':          NotFoundPage,
  };


  onMount( function(){
    
  });
</script>

<style global lang="scss" >
  /* @import "styles/global.scss"; */
</style>

<template>
    <Navigation path="{$location}" />
    <div class="container-fluid">
    <Router {routes} />
  </div>
	<Footer />
</template>


