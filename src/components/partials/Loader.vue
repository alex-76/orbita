<template>
  <div class="loader">Loading... <img :src="src" /></div>
</template>
<script>

  import img from "../../assets/loader.gif"

  export default {
    data () {
      return {
        src: '/wp-content/themes/_customthema/dist/'+img
      }
    },
  }
</script>

<style>
    div.loader {
        height: 60px;
        text-align: center;
        font-size: 12px;
        font-family: Tahoma;
    }
</style>