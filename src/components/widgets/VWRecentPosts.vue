<template>
  <div class="widget widget-recent">
    <h3>
      <slot></slot>
    </h3>
    <ul class="uk-list" v-if="recentPostsLoaded">
      <li v-for="post in recentPosts(limit)" :key="post.id">
        <router-link :to="{
            name: 'Post',
            params: {
               postSlug: post.slug,
               postID: post.id
            }}">{{ post.title.rendered }}
        </router-link>
      </li>
    </ul>
    <div v-else></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {

  name: 'PostWidget',

  props: ["limit"],

  computed: {
    ...mapGetters('post',{
      recentPosts: "recentPosts",
      recentPostsLoaded: "recentPostsLoaded"
    })
  },

  mounted() {
    this.$store.dispatch("post/getPosts", { limit: this.limit });
  }
};
</script>

<style scoped lang="scss">
  div.widget-recent {
    border-right: 1px solid #cccccc;
  }
</style>
