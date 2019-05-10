<template>
  <div>
    <template v-if="allPagesLoaded">
      <h1>{{ pageContent.title.rendered }}</h1>
      <div v-html="pageContent.content.rendered"></div>
    </template>
    <Loader v-else/>
  </div>
</template>

<script>
import Loader from "../partials/Loader.vue";
import { mapGetters } from "vuex";

export default {

  name:'Page',

  metaInfo: {
    title: 'About',
    titleTemplate: '%s | WHA!',
    meta: [
      { vmid: 'description', name: 'description', content: 'Training' },
      { vmid: 'keyword', name: 'keyword', content: 'Keyword VueJS' },
    ],
    htmlAttrs: {
      lang: 'en'
    }
  },

  computed: {
    ...mapGetters('page',{
      page: "page",
      allPagesLoaded: "allPagesLoaded"
    }),

    pageContent() {
      return this.page(this.$route.params.pageSlug);
    }
  },

  components: {
    Loader
  },
  created() {
    this.$store.dispatch("page/getAllPages");
  }

};
</script>
