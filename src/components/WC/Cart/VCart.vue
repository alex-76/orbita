<template>
  <div class="container-cart">

    <template v-if="cartLoaded">
      <h2 class="uk-margin uk-text-center uk-text-uppercase">Cart</h2>
      <ul class="ul-list">
        <li  v-for="cart in getCartContent">
          ID: {{cart.product_id}} - Quantity: {{cart.quantity}}
        </li>
      </ul>
      <a href="#" @click="clearCart">Cart Clear</a>
    </template>
    <Loader v-else/>

  </div>
</template>

<script>

import Loader from "../../partials/Loader.vue";
import _ from "underscore";

export default {

  name:'Cart',

  components: { Loader },

  metaInfo() {
        return {
            title: 'Cart' ,
            meta: [
                { vmid: 'description', name: 'description', content: 'Description example' }
            ]
        }
   },

  computed: {
      cartLoaded() {
          return this.$store.getters['cart/cartLoaded'];
      },
      getCartContent() {
          return this.$store.getters['cart/getCartContent'];
      },
  },

  methods: {

    clearCart() {
      this.$store.dispatch("cart/clearCart");
    }
  },

  beforeCreate() {},

  created:function() {},

  mounted:function() {},

  beforeUpdate() {},

  updated() {}

};

</script>

<style scoped lang="scss">
  div.container-cart {
    input {
      width: 60px;
      border:1px solid #939393;
      margin-right: 10px;
      text-align:center;
    }
  }
</style>
