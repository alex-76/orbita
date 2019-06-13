<template>

  <div class="container-checkout">

      <h2 class="uk-margin uk-text-center uk-text-uppercase">Checkout page</h2>

      <form>
          <fieldset class="uk-fieldset">

              <legend class="uk-legend">Billing</legend>

              <div class="uk-margin">
                  <input v-model.trim="dataOrder.billing.first_name" class="uk-input uk-width-1-2" type="text" name="first_name" placeholder="First Name">
              </div>
              <div class="uk-margin">
                  <input v-model.trim="dataOrder.billing.last_name" class="uk-input uk-width-1-2" type="text" name="last_name" placeholder="Last Name">
              </div>
              <div class="uk-margin">
                  <input v-model.trim="dataOrder.billing.address_1" class="uk-input uk-width-1-2" type="text" name="address_1" placeholder="Address">
              </div>
              <div class="uk-margin">
                  <input v-model.trim="dataOrder.billing.city" class="uk-input uk-width-1-2" type="text" name="city" placeholder="City">
              </div>
              <div class="uk-margin">
                  <input v-model.trim="dataOrder.billing.state" class="uk-input uk-width-1-2" type="text" name="state" placeholder="State">
              </div>
              <div class="uk-margin">
                  <input v-model.trim="dataOrder.billing.postcode" class="uk-input uk-width-1-2" type="text" name="postcode" placeholder="Postcode">
              </div>
              <div class="uk-margin">
                  <input v-model.trim="dataOrder.billing.country" class="uk-input uk-width-1-2" type="text" name="country" placeholder="Country">
              </div>
              <div class="uk-margin">
                  <input v-model.trim="dataOrder.billing.email" class="uk-input uk-width-1-2" type="text" name="email" placeholder="Email">
              </div>
              <div class="uk-margin">
                  <input v-model.trim="dataOrder.billing.phone" class="uk-input uk-width-1-2" type="text" name="phone" placeholder="Phone">
              </div>

          </fieldset>
      </form>

      <div class="uk-section uk-section-muted uk-margin-top uk-margin-bottom uk-padding payment">
          <div class="uk-container">

              <h3 class="uk-flex uk-flex-between">
                  <span>Product</span>
                  <span>Subtotal</span>
              </h3>

              <div class="uk-child-width-1-2@m" uk-grid>
                  <template v-for="product in getProducts">
                      <template v-for="cart in getCartContent" v-if="product.id === cart.product_id">

                          <div>
                              {{product.name}} x {{cart.quantity}}
                          </div>
                          <div class="uk-text-right">
                              {{cart.line_subtotal}}
                          </div>

                      </template>
                  </template>
                  <div>TOTAL:</div>
                  <div class="uk-text-right">{{getCartTotals.subtotal}}</div>
              </div>
          </div>
      </div>

      <div class="uk-margin-bottom btn-order">
          <button class="uk-button uk-button-primary" @click.prevent="payment">Payment</button>
      </div>

  </div>

</template>

<script>

import Loader from "../../partials/Loader.vue";
import _ from "underscore";
import Uikit from 'uikit';

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

  computed: {
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

      payment() {

          let flag = false;
          _.each(this.dataOrder.billing, function (element) {

              if (_.isEmpty(element)) {
                  flag = true;
              }
          });

          if(!flag) {
              // После создания заказа необходимо очистить корзину и перенаправить на страницу завершения!
              const data = this.dataOrder;
              this.$store.dispatch("checkout/createOrder",{ data : data });
          }

          else {
              Uikit.modal.alert('Fields is empty');
          }
      }
  },

  beforeCreate() {},

  created:function() {
      // здесь наполняем массив line_items из корзины
      // console.log(this.$store.getters['cart/getCartContent']);

       let arr = this.$store.getters['cart/getCartContent'];
       for( let i = 0; i < arr.length; i++ ) {

           this.dataOrder.line_items.push({ product_id : arr[i].product_id, quantity:arr[i].quantity });
       }
       //console.log(this.dataOrder.line_items);

  },

  mounted:function() {},

  beforeUpdate() {},

  updated() {}

};

</script>

<style scoped lang="scss">
  div.container-checkout {

      .payment {
          .uk-container {
              h3 {
                  border-bottom: 1px solid #e0e0e0;
                  padding-bottom: 15px;
                  span {
                      font-weight: bold;
                  }
              }
              & > * {
                  font-size: 16px;
              }
              & > div {
                   div {
                      margin: 10px 0;
                  }
              }
          }
      }
      .btn-order {
          text-align: right;
      }
  }
</style>
