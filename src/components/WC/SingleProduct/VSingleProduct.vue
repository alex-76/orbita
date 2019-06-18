<template>
  <div class="container-single-product">

    <template v-if="productLoaded">

      <div class="uk-child-width-1-2 uk-flex uk-flex-top uk-margin" uk-grid>
        <div><img :src="getProduct.images[0].src" width="300"></div>
        <div>
            <h2 class="uk-margin uk-text-uppercase">{{getProduct.name}}</h2>
            <div v-html="getProduct.description"></div>
            <div v-html="getProduct.price_html"></div>
            <hr class="uk-divider">
            <div class="uk-flex uk-flex-left">
              <input class="uk-input uk-form-width-medium uk-form-large" type="text" v-model="quantity" value="1">
              <button @click.prevent="addCart" class="uk-button uk-button-primary uk-button-large">ADD CART</button>
            </div>
        </div>
      </div>

    </template>

    <Loader v-else/>

  </div>
</template>

<script>

import Loader from "../../partials/Loader.vue";
import _ from "underscore";
import UIkit from 'uikit';

export default {

  name:'Product',

  components: { Loader },

  data () {
        return {
            quantity: 1
      }
  },

  metaInfo() {
        return {
            title: (!_.isEmpty(this.getProduct.name)) ? this.getProduct.name : '' ,
            meta: [
                { vmid: 'description', name: 'description', content: 'Description example' }
            ]
        }
   },

  computed: {

      productLoaded() {
          return this.$store.getters['product/productLoaded'];
      },

      getProduct() {
          return this.$store.getters['product/getProduct'];
      },
  },

  methods: {

      addCart() {
          this.$store.dispatch("cart/addCart", { id: this.$route.params.productID, q: this.quantity });
          UIkit.notification("<span uk-icon='icon: check'></span> Product added", {
              pos: 'top-center',
              status: 'success',
              timeout: 2000
          });
      }
  },

  beforeCreate() {
      this.$store.dispatch("product/clearStateProduct");
  },

  created:function() {
      this.$store.dispatch("product/getProduct", this.$route.params.productID);
  },

  mounted:function() {},

  beforeUpdate() {},

  updated() {}

};

</script>

<style scoped lang="scss">
  div.container-single-product {
      padding-top: 50px;
      h2 {
          font-size: 24px;
      }
    input {
      width: 60px;
      border:1px solid #939393;
      margin-right: 10px;
      text-align:center;
    }
  }
</style>
