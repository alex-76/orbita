<template>
  <header>

    <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
      <div class="uk-navbar-center">

        <ul class="uk-navbar-nav">
          <li class="uk-active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li>
            <a href="#">Pages</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class="uk-active"><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
              </ul>
            </div>
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
    border: 1px solid #0e6dcd;
  }*/
</style>
