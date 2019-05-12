require("./bootstrap");
import Vue from "vue";

import router from "./router";
import App from "./App.vue";
import store from "./store";
import Meta from 'vue-meta'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
Vue.use(Meta);

import './assets/scss/main.scss';

new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: '<App/>',
  created() {
    this.$store.dispatch("getAllCategories");
    this.$store.dispatch("page/getAllPages");
  }
});
