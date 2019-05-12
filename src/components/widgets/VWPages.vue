<template>
  <div class="widget pages">
    <h3>
      <slot></slot>
    </h3>
    <ul class="uk-list" v-if="allPagesLoaded">
      <li v-for="page in somePages(limit)" :key="page.id">
        <router-link :to="{name: 'Page', params: {pageSlug: page.slug}}">{{ page.title.rendered }}</router-link>
      </li>
    </ul>
    <div v-else></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'PageWidget',
  props: ["limit"],
  computed: {
    ...mapGetters('page',{
      somePages: "somePages",
      allPagesLoaded: "allPagesLoaded"
    })
  },
};
</script>
