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
    <a href="#" @click="apiWC">Test Api WC</a>

  </div>
</template>


<script>

  //import api from "../../api/index";
  import axios from "axios";
  import SETTINGS from "../../settings";
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
            'getAPages'
          ]
      ),

      apiWC() {


        // const ck = "ck_c17e5a4273eef3bc84d970c14edc6468f2b873d1";
        // //const ck = "ck_c17e5a4273eef3bc84d970c14edc6468f2b873d1";
        // let timestamp = new Date().getTime();
        //
        // axios.get(SETTINGS.API_BASE_WC_PATH + "products?oauth_consumer_key="+ck+"&oauth_signature_method=HMAC-SHA1&oauth_timestamp="+timestamp+"&oauth_nonce=iIZkksbSo35&oauth_version=1.0&oauth_signature=%2F7XPZzpUlCu%2BMweeuGaEHApqVOE%3D")
        //         .then( function (response) {
        //
        //           console.log(response);
        //
        //
        //         })
        //         .catch( function (error) {
        //           console.log(error.response)
        //         });


      }
    },

    created:function () {

        let self = this;

        axios.get(SETTINGS.API_BASE_PATH + "pages?per_page=10")
            .then( function (response) {

                for(let i = 0; i < response.data.length; i++) {

                    self.pages.push({
                        title : response.data[i].title.rendered,
                        id : response.data[i].id
                    });
                }
            })
            .catch( function (error) {
                console.log(error.response)
            });

        // Test Woocomerce API
        // https://local.wordpress.dev/wp-json/wc/v2/orders?consumer_key=XXXX&consumer_secret=XXXX
        //http://http://develep/wp-json/wc/v3/products?consumer_key=ck_88576ba2b89a37a263111991a2fc2989dde5bdf5&consumer_secret=cs_cea88e4c1738706d5dbc5cf5aae17e191d0a2876

        // ck_511d5891c24444bd2100a871f6dc8fad1e5bd7cb
        // cs_f44cd29735003db74a2c025babbd514f03705607


//        axios.get(SETTINGS.API_BASE_WC_PATH + "products?" +
//                "consumer_key= ck_88576ba2b89a37a263111991a2fc2989dde5bdf5&"+
//                "consumer_secret=cs_cea88e4c1738706d5dbc5cf5aae17e191d0a2876")
//            .then( function (response) {
//                console.log(response);
//            })
//            .catch( function (error) {
//                console.log(error.response)
//            });

        console.log('created');
      
    },

    mounted:function () {}
      
  }

</script>
