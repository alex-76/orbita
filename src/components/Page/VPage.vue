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

  components: { Loader },

   metaInfo() {
        return {
            title: this.pageContent.title.rendered,
            meta: [
                { vmid: 'description', name: 'description', content: 'Description example' }
            ]
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

};
</script>
