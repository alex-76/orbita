<template>
  <div class="container-cart">

    <template v-if="cartLoaded">
      <h2 class="uk-margin uk-text-center uk-text-uppercase">Cart</h2>
      <p>List products in cart...</p>
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
          //console.log(this.$store.getters['cart/cartLoaded']);
          return this.$store.getters['cart/cartLoaded'];
      },
      getCartContent() {
          //console.log(this.$store.getters['cart/getCartContent']);
          return this.$store.getters['cart/getCartContent'];
      },
  },

  methods: {},

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
