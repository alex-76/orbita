<template>
  <header>

    <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
      <div class="uk-navbar-center">

        <a class="uk-navbar-item uk-logo" href="/">
          <img class="uk-border-circle" :src="logo" />
        </a>

        <ul class="uk-navbar-nav">
          <li class="uk-active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Page', params: {pageSlug: 'about'}}"
                         class="nav-link">About
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'Post', params: {postSlug: 'news'}}"
                         class="nav-link">News
            </router-link>
          </li>
          <li>
              <router-link :to="{name: 'Shop', params: {pageSlug: 'shop'}}" class="nav-link">Shop</router-link></li>
        </ul>

      </div>
    </nav>

  </header>
</template>

<script>

  import SETTINGS from "../../settings";
  import logo from "../../assets/logo.jpg"

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
