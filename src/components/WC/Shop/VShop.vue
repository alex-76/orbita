<template>
  <div>
    <template v-if="allProductsLoaded">
      <h1>Shop</h1>
      <h4>List products</h4>
      <ul class="uk-child-width-1-3 uk-text-center" uk-grid>
        <li v-for="product in getProducts" :key="product.id">
          {{product.name}}<br>
          <img :src="product.images[0].src" width="120"><br>
          <span>{{product.price}}</span>
        </li>
      </ul>
    </template>
    <Loader v-else/>
  </div>
</template>

<script>
import Loader from "../../partials/Loader.vue";
import { mapGetters } from "vuex";

export default {

  name:'Shop',

  components: { Loader },

  metaInfo() {
        return {
            title: 'Shop',
            meta: [
                { vmid: 'description', name: 'description', content: 'Description example' }
            ]
        }
   },

  computed: {
      ...mapGetters('shop',{
          getProducts : "getProducts",
          allProductsLoaded : "allProductsLoaded"
      }),
  },

  created:function() {

      this.$store.dispatch("shop/getProducts");
  },

  mounted:function() {}


};
</script>
