<template>
  <div class="container-cart">

    <template v-if="cartLoaded">

      <h2 class="uk-margin uk-text-center uk-text-uppercase">Cart</h2>

        <table class="uk-table uk-table-divider">
            <tr>
                <th>ID</th>
                <th>Foto</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
            </tr>
            <template v-for="product in getProducts">

              <template v-for="cart in getCartContent" v-if="product.id === cart.product_id">

                  <tr>
                      <td>{{cart.product_id}}</td>
                      <td><img :src="product.images[0].src" width="120"></td>
                      <td>{{cart.quantity}}</td>
                      <td>{{cart.line_subtotal}}</td>
                      <td><a href="#" @click.prevent="removeProduct(product.id)">X</a></td>
                  </tr>

              </template>

          </template>
      </table>

     <hr/>

     <a href="#" @click.prevent="clearCart">Cart Clear</a>

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
      },
      removeProduct(id) {
        this.$store.dispatch("cart/removeProduct",{ id: id });
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
