<template>
  <header>

    <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
      <div class="uk-navbar-center">

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
            <router-link :to="{name: 'Post', params: {postSlug: 'news', postID: '1'}}"
                         class="nav-link">News
            </router-link>
          </li>
        </ul>

      </div>
    </nav>

  </header>
</template>

<script>

  export default {
    name: 'VHeader',
    props: [],
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  /*nav {
    background: none !important;
  }*/
</style>
