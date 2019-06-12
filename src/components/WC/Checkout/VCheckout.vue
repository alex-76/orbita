<template>
  <div class="container-checkout">

      <h3>Checkout page</h3>

      <form>
          <fieldset class="uk-fieldset">

              <legend class="uk-legend">Billing</legend>

              <div class="uk-margin">
                  <input v-model="dataOrder.billing.first_name" class="uk-input uk-width-1-2" type="text" name="first_name" placeholder="First Name">
              </div>
              <div class="uk-margin">
                  <input v-model="dataOrder.billing.last_name" class="uk-input uk-width-1-2" type="text" name="last_name" placeholder="Last Name">
              </div>
              <div class="uk-margin">
                  <input v-model="dataOrder.billing.address_1" class="uk-input uk-width-1-2" type="text" name="address_1" placeholder="Address">
              </div>
              <div class="uk-margin">
                  <input v-model="dataOrder.billing.city" class="uk-input uk-width-1-2" type="text" name="city" placeholder="City">
              </div>
              <div class="uk-margin">
                  <input v-model="dataOrder.billing.state" class="uk-input uk-width-1-2" type="text" name="state" placeholder="State">
              </div>
              <div class="uk-margin">
                  <input v-model="dataOrder.billing.postcode" class="uk-input uk-width-1-2" type="text" name="postcode" placeholder="Postcode">
              </div>
              <div class="uk-margin">
                  <input v-model="dataOrder.billing.country" class="uk-input uk-width-1-2" type="text" name="country" placeholder="Country">
              </div>
              <div class="uk-margin">
                  <input v-model="dataOrder.billing.email" class="uk-input uk-width-1-2" type="text" name="email" placeholder="Email">
              </div>
              <div class="uk-margin">
                  <input v-model="dataOrder.billing.phone" class="uk-input uk-width-1-2" type="text" name="phone" placeholder="Phone">
              </div>

          </fieldset>

          <button class="uk-button uk-button-primary" @click.prevent="payment">Payment</button>

      </form>

      <hr/>

  </div>
</template>

<script>

import Loader from "../../partials/Loader.vue";
import _ from "underscore";

export default {

  name:'Checkout',

  data() {
      return {
          dataOrder : {
              payment_method: 'bacs',
              payment_method_title: 'Direct Bank Transfer',
              set_paid: true,
              billing: {
                  'first_name' : '',
                  'last_name'  : '',
                  'address_1'  : '',
                  'city'       : '',
                  'state'      : '',
                  'postcode'   : '',
                  'country'    : '',
                  'email'      : '',
                  'phone'      : '',

              },
              // shipping: {
              //     first_name: '',
              //     last_name: '',
              //     address_1: '',
              //     address_2: '',
              //     city: '',
              //     state: '',
              //     postcode: '',
              //     country: ''
              // },
              line_items: [],
              // shipping_lines: [
              //     {
              //         method_id: '',
              //         method_title: '',
              //         total: ''
              //     }
              // ]
          }
      };
  },

  components: { Loader },

  metaInfo() {
        return {
            title: 'Checkout' ,
            meta: [
                { vmid: 'description', name: 'description', content: 'Description example' }
            ]
        }
   },

  computed: {},

  methods: {

      payment() {
          // Нужно заполнить массив line_items объектами из корзины
          // После создания заказа необходимо очистить корзину и перенаправить на страницу завершения!
          const data = this.dataOrder;
          this.$store.dispatch("checkout/createOrder",{ data : data });
      }
  },

  beforeCreate() {},

  created:function() {
      // здесь наполняем массив line_items из корзины
      // console.log(this.$store.getters['cart/getCartContent']);

       let arr = this.$store.getters['cart/getCartContent'];
       for(let i = 0; i < arr.length; i++) {

           this.dataOrder.line_items.push({ product_id : arr[i].product_id, quantity:arr[i].quantity });
       }
       console.log(this.dataOrder.line_items);

  },

  mounted:function() {},

  beforeUpdate() {},

  updated() {}

};

</script>

<style scoped lang="scss">
  div.container-checkout {

  }
</style>
