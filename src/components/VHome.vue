<template>

  <div>

    <template v-if="allPagesLoaded">
      <div class="section-widgets" uk-grid>
        <div class="uk-width-auto">
          <img :src="srcOne" width="400" />
        </div>
        <div class="uk-width-expand">
          <h3 v-text="pageContentHome.title.rendered"></h3>
          <div v-html="pageContentHome.content.rendered"></div>
        </div>
      </div>
    </template>

    <Loader v-else/>

    <hr class="uk-divider-icon">

    <div class="uk-child-width-1-3 section-widgets" uk-grid>
      <pages-widget limit="5">Pages</pages-widget>
      <recent-posts-widget limit="5">Recent Posts</recent-posts-widget>
      <pages-widget limit="5">Pages</pages-widget>
    </div>

    <hr class="uk-divider-icon">

    <div class="uk-flex uk-flex-between uk-margin">
      <div><img :src="srcTwo" width="300" /></div>
      <div><img :src="srcTwo" width="300" /></div>
      <div><img :src="srcTwo" width="300" /></div>
    </div>

    <div v-html="pageContentHome.content.rendered"></div>

  </div>

</template>

<script>
import  RecentPostsWidget from "./widgets/VWRecentPosts.vue";
import PagesWidget from "./widgets/VWPages.vue";
import Loader from "./partials/Loader.vue";
import SETTINGS from "../settings";
import imageOne from "../assets/technology.jpg"
import imageTwo from "../assets/InfoTechnology.jpg"


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
  data () {
    return {
      srcOne: SETTINGS.URL_RESOURSE + SETTINGS.THEME_DIR_PATH + imageOne,
      srcTwo: SETTINGS.URL_RESOURSE + SETTINGS.THEME_DIR_PATH + imageTwo
    }
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
