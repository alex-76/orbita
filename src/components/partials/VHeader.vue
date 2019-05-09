<template>
  <header>

    <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
      <div class="uk-navbar-center">

        <ul class="uk-navbar-nav">
          <li class="uk-active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Page', params: {pageSlug: 'my-page'}}"
                         class="nav-link">Pages
            </router-link>
          </li>
          <li><a href="#">Posts</a></li>
          <li><a href="#">{{msg}}</a></li>
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
      return {
        msg: 'Item example',
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
