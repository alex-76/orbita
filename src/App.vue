<template>
  <div id="my-app" class="page-wrapper">
    <app-header/>

    <transition
      name="loader-animation"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <progress-bar :show-loader="showLoader" :loader-style="loaderStyle"/>
    </transition>

    <transition name="page-transition" mode="out-in" appear>
      <div class="uk-container content">
        <router-view></router-view>
      </div>
    </transition>

    <app-footer/>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Header from "./components/partials/VHeader.vue";
import Footer from "./components/partials/VFooter.vue";
import ProgressBar from "./components/partials/VProgressBar.vue";

export default {
  data() {
    return {
      showLoader: true
    };
  },
  computed: {
    ...mapGetters({
      isLoading: "isLoading",
      loadingProgress: "loadingProgress"
    }),

    loaderStyle() {
      return 'width: ${this.loadingProgress}%;';
    }
  },

  components: {
    appHeader: Header,
    appFooter: Footer,
    ProgressBar
  },

  watch: {
    // watch the value of isLoading and once it's false hide the loader
    isLoading(val) {
      if (val == false) {
        let self = this;
        setTimeout(function() {
          self.showLoader = false;
        }, 1000);
      }
    }
  }
};
</script>
