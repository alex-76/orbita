<template>
  <div class="container-checkout">

      <h3>Checkout page</h3>

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
            title: 'Checkout' ,
            meta: [
                { vmid: 'description', name: 'description', content: 'Description example' }
            ]
        }
   },

  computed: {},


  methods: {},

  beforeCreate() {
      console.log('beforeCreate');
  },

  created:function() {
      console.log('created');
  },

  mounted:function() {
     console.log('mounted');
  },

  beforeUpdate() {
      console.log('beforeUpdate');
  },

  updated() {
      console.log('updated');
  }

};

</script>

<style scoped lang="scss">
  div.container-checkout {

  }
</style>
