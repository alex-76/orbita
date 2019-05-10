<template>
  <div class="widget recent-posts">
    <h3>
      <slot></slot>
    </h3>
    <ul v-if="recentPostsLoaded">
      <li v-for="post in recentPosts(limit)" :key="post.id">
        <router-link :to="{name: 'Post', params: {postSlug: post.slug}}">{{ post.title.rendered }}</router-link>
      </li>
    </ul>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
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
