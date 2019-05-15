<template>
  <header>

    <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
      <div class="uk-navbar-center">

        <router-link class="nav-link" to="/"><img class="uk-border-circle" :src="logo" width="120" /></router-link>

        <ul class="uk-navbar-nav">
          <li>
            <router-link class="nav-link" to="/">Home</router-link>
          <li>
            <router-link :to="{name: 'Page', params: {pageSlug: 'about'}}" class="nav-link">About</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Post', params: {postSlug: 'news'}}" class="nav-link">News</router-link>
          </li>
          <li>
              <router-link :to="{name: 'Shop', params: {pageSlug: 'shop'}}" class="nav-link">Shop</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Cart', params: {pageSlug: 'cart'}}" class="nav-link">Cart</router-link>
          </li>

        </ul>

      </div>
    </nav>

  </header>
</template>

<script>

  import SETTINGS from "../../settings";
  import logo from "../../assets/logo.png"

  export default {
    name: 'VHeader',
    props: [],
    data () {
      return {
          logo: SETTINGS.THEME_DIR_PATH + logo
      }
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  /*nav {
    background: none !important;
  }*/
</style>
