<template>
  <div class="container-shop">

    <template v-if="allProductsLoaded">
      <h2 class="uk-margin uk-text-center uk-text-uppercase">Catalog of our computers</h2>
      <ul class="uk-child-width-1-3 uk-flex uk-flex-bottom uk-text-center" uk-grid>

        <li v-for="product in getProducts" :key="product.id">
          <img :src="product.images[0].src" width="200">
          <h4>
              <router-link :to="{
                  name: 'Product',
                  params: {
                     productSlug : product.slug,
                     productID: product.id
                  }}">{{product.name}}
              </router-link>
            </h4>
          <h5 v-html="product.price_html"></h5>
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

<style scoped lang="scss">

  div.container-shop {
    margin: 30px 0;
    h2 {
      margin-bottom: 50px;
    }
    ul {
      li {
        h4,h5 {
          margin: 5px 0;
        }
        h4 {
          font-size: 16px;
        }
        h5 {
          span {
            font-size: 14px;
          }
        }
      }
    }
  }

</style>
