<template>

  <div>

    <template v-if="allPagesLoaded">

      <div v-html="pageContentHome.content.rendered"></div>

    </template>

    <Loader v-else/>

    <div class="uk-flex uk-flex-left uk-flex-top section-widgets">

      <pages-widget limit="5">Pages</pages-widget>

      <recent-posts-widget limit="5">Recent Posts</recent-posts-widget>

    </div>

  </div>

</template>

<script>
import  RecentPostsWidget from "./widgets/VWRecentPosts.vue";
import PagesWidget from "./widgets/VWPages.vue";
import Loader from "./partials/Loader.vue";


export default {

  name: 'HomePage',

  metaInfo: {
    title: 'Home Page WHA',
    titleTemplate: '%s | WHA!',
    meta: [
      { vmid: 'description', name: 'description', content: 'Training' },
      { vmid: 'keyword', name: 'keyword', content: 'Keyword VueJS' },
    ],
    htmlAttrs: {
      lang: 'en'
    }
  },

  components: {
    RecentPostsWidget,
    PagesWidget,
    Loader
  },

  computed: {
      allPagesLoaded() {
          return this.$store.getters['page/allPagesLoaded'];

      },
      pageContentHome() {
          return this.$store.getters['page/pageContentHome'];
      }
  }

};
</script>
