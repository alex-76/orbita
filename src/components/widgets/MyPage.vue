<template>
  <div class="widget pages">
    <ul>
      <li v-for="item in pages">
        {{item.title}}
      </li>
    </ul>
    <a href="#" @click.prevent="addNew">New name</a>
    <a href="#" @click.prevent="addNote">New note</a>
    <p>{{name}}</p>
    <p>{{notes.text}}</p>
  </div>
</template>


<script>

  //import api from "../../api/index";
  import axios from "axios";
  import SETTINGS from "../../settings";

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
      name() {
        return this.$store.getters.name;
      },
      notes() {
        return this.$store.getters.notes;
      }
    },
    methods: {
      addNew() {
        this.$store.dispatch('addName', 'New name Alex');
      },
      addNote() {
        this.$store.dispatch('addNote', {text : 'New notes!!!'});
      }
    },
    created:function () {

        let self = this;

        axios.get(SETTINGS.API_BASE_PATH + "pages?per_page=10")
            .then( function (response) {

                for(let i = 0; i < response.data.length; i++) {

                    //console.log(response.data[i].title.rendered);
                    //console.log(response.data[i].id);

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
        //curl https://www.example.com/wp-json/wc/v3/orders?consumer_key=123&consumer_secret=abc
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

    mounted:function () {

      console.log('mounted:');

    }
      
  }

</script>
