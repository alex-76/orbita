<template>
  <div class="container-cart">

    <template v-if="cartLoaded">

      <h2 class="uk-margin uk-text-center uk-text-uppercase">Cart</h2>

      <table class="uk-table uk-table-divider">
          <tr>
                <th>Foto</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
          </tr>
          <template v-for="product in getProducts">
              <template v-for="cart in getCartContent" v-if="product.id === cart.product_id">
                  <tr>
                      <td>
                          <router-link :to="{
                              name: 'Product',
                              params: {
                                 productSlug : product.slug,
                                 productID: product.id
                              }}">
                              <img :src="product.images[0].src" width="120">
                          </router-link>
                      </td>
                      <td>{{cart.quantity}}</td>
                      <td>{{cart.line_subtotal}}</td>
                      <td><a href="#" @click.prevent="removeItemCart(product.id, cart.key)"><span uk-icon="close"></span></a></td>
                  </tr>
              </template>
          </template>
            <tr>
                <td><a href="#" class="uk-button uk-button-primary" @click.prevent="clearCart">Clear</a></td>
                <td colspan="2"></td>
                <td class="subtotal" >Total: {{getCartTotals.subtotal}}</td>
            </tr>
            <tr>
                <td colspan="4" class="uk-text-right">
                    <router-link :to="{name: 'Checkout', params: {pageSlug: 'checkout'}}" class="uk-button uk-button-primary uk-button-large">CHECKOUT</router-link>
                </td>
            </tr>
      </table>


    </template>
      <template v-else>
          <h3>Cart is empty</h3>
      </template>

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
      getCartTotals() {
          return this.$store.getters['cart/getCartTotals'];
      }
  },


  methods: {

      clearCart() {
        this.$store.dispatch("cart/clearCart");
      },
      removeItemCart(id,key) {
        this.$store.dispatch("cart/removeItemCart",{ id: id, key: key });
      }
  },

  beforeCreate() {
      console.log('beforeCreate');
  },

  created:function() {
      console.log('created');
      this.$store.dispatch("cart/cartTotals");
  },

  mounted:function() {
     console.log('mounted');
  },

  beforeUpdate() {
      console.log('beforeUpdate');
      this.$store.dispatch("cart/cartTotals");
  },

  updated() {
      console.log('updated');
  }

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
      table {
          th,td {
              text-align: center;
              vertical-align: middle;
          }
          td.subtotal {
              text-align: right;
              font-size: 26px;
              font-weight: bold;
          }
      }
  }
</style>
