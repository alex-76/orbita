<template>
  <div class="widget pages">
    <ul>
      <li v-for="item in pages">
        {{item.title}}
      </li>
    </ul>
    <h4>My test block...</h4>
    <a href="#" @click.prevent="addNew">add Name</a>
    <a href="#" @click.prevent="addNote">add Note</a>
    <a href="#" @click.prevent="addNameY('Vasa')">AddNameY</a>
    <a href="#" @click.prevent="getAPages">getAPages</a>
    <p>mapGetters: {{name}}</p>
    <p>getName: {{getName}}</p>
    <p>{{notes.text}}</p>
    <p>{{hooks}}</p>
    <hr>
    <ul>
      <li v-for="item in notes">
        Page: {{ item }}
      </li>
    </ul>
    <hr>
    <h5>Go: {{doneGo}}</h5>
    <hr>
    <a href="#" @click.prevent="getProducts">Test Api WC</a>
    <ul>
      <li v-for="(item, index) in listProducts">
        <!--{{item}}-->
        <img :src="item.images[0].src" width="100">
        Name: {{item.name}} ID: {{item.id}}
      </li>
    </ul>

  </div>
</template>


<script>

  //import axios from "axios";
  //import SETTINGS from "../../settings";
  import { mapGetters, mapActions } from "vuex";

  export default {

    name: 'VMyPage',

    props: [],

    data () {
        return {
            pages: [{
                title:'Alex'
            }]
        }
    },

    computed: {

      getName() {
        return this.$store.getters.name;
      },

      notes() {
        return this.$store.getters.notes;
      },

      ...mapGetters({
          name: "name",
          notes: "notes",
          hooks: "getHooks"
      }),

      listProducts() {
          return this.$store.getters.getMyProducts.data;
      },

      doneGo() {
            return this.$store.getters.getGo;
        }
    },

    methods: {

      addNew() {
        this.$store.dispatch('addName', 'New name Alex');
      },
      addNote() {
        this.$store.dispatch('addNote', 'New notes!!!');
      },
      ...mapActions([
            'addNameY',
            'getAPages',
            'getProducts'
          ]
      ),
    },

    created:function () {

//        let self = this;
//
//        axios.get(SETTINGS.API_BASE_PATH + "pages?per_page=10")
//            .then( function (response) {
//
//                for(let i = 0; i < response.data.length; i++) {
//
//                    self.pages.push({
//                        title : response.data[i].title.rendered,
//                        id : response.data[i].id
//                    });
//                }
//            })
//            .catch( function (error) {
//                console.log(error.response)
//            });

      
    },

    mounted:function () {}
      
  }

</script>
<style scoped lang="scss">

  ul > li { color: #229718; }

</style>