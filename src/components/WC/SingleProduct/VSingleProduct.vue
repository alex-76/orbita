<template>
  <div class="container-single-product">

    <template v-if="true">
      <h2 class="uk-margin uk-text-center uk-text-uppercase">Product</h2>
    </template>

    <Loader v-else/>

  </div>
</template>

<script>

import Loader from "../../partials/Loader.vue";

export default {

  name:'Product',

  components: { Loader },

  metaInfo() {
        return {
            title: 'Product',
            meta: [
                { vmid: 'description', name: 'description', content: 'Description example' }
            ]
        }
   },

  computed: {},

  created:function() {

      console.log(this.$store.dispatch("product/getProduct", this.$route.params.productID));
      //this.$store.dispatch('alex/addName', 'New name Alex');
  },

  mounted:function() {}
};

</script>

<style scoped lang="scss">

  div.container-single-product {

  }

</style>
