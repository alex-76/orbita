<template>
  <div class="container-cart">

    <template v-if="cartLoaded">

      <h2 class="uk-margin uk-text-center uk-text-uppercase">Cart</h2>

      <template v-for="product in getProducts">

          <template v-for="cart in getCartContent" v-if="product.id == cart.product_id" tag="ul">

          <ul class="ul-list"  uk-grid>
            <li><img :src="product.images[0].src" width="120"></li>
            <li>ID: {{cart.product_id}}</li>
            <li>Quantity: {{cart.quantity}}</li>
            <li>Total: {{cart.line_subtotal}}</li>
          </ul>

          </template>

      </template>

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
      getProducts() {
        return this.$store.getters['shop/getProducts'];
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
