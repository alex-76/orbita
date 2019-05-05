require("./bootstrap");
import Vue from "vue";

import router from "./router";
import App from "./App.vue";
import store from "./store";
import * as types from "./store/mutation-types";

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

import './assets/scss/main.scss';

new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: '<App/>',
  created() {
    this.$store.commit(types.RESET_LOADING_PROGRESS);
    this.$store.dispatch("getAllCategories");
    this.$store.dispatch("getAllPages");
  }
});
