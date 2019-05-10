<template>
  <div>
    <h3>Welcome!</h3>
    <p>You'll probably want to remove all of this stuff, but hey it at least it works!</p>
    <recent-posts-widget limit="5">Recent Posts</recent-posts-widget>
    <pages-widget limit="5">Pages</pages-widget>
    <!--<my-page></my-page>-->
  </div>
</template>

<script>
import RecentPostsWidget from "./widgets/VRecentPosts.vue";
import PagesWidget from "./widgets/VPages.vue";

//import MyPage from "./widgets/MyPage.vue";

export default {
  name: 'Home Page',
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
    //MyPage
  }
};
</script>
