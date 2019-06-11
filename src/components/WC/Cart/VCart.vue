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
                      <td><a href="#" @click.prevent="removeItemCart(product.id, cart.key)">X</a></td>
                  </tr>

              </template>

          </template>
            <tr>
                <td class="subtotal" colspan="5">Total: {{getCartTotals.subtotal}}</td>
            </tr>
      </table>



     <hr/>

     <a href="#" @click.prevent="clearCart">Cart Clear</a>

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
          td.subtotal {
              text-align: right;
          }
      }

  }
</style>
