<template>
  <div class="loader"><img :src="src" /></div>
</template>
<script>

  import SETTINGS from "../../settings";
  import loader from "../../assets/loader.gif"

  export default {
    data () {
      return {
        src: SETTINGS.THEME_DIR_PATH + loader
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