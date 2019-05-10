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

  import { mapGetters, mapActions } from "vuex";

  export default {

    name: 'VMyPage',

    props: [],

    metaInfo: {
      title: 'Training Math',
      titleTemplate: '%s | WHA!',
      meta: [
        { vmid: 'description', name: 'description', content: 'Training' },
        { vmid: 'keyword', name: 'keyword', content: 'Keyword VueJS' },
      ],
      htmlAttrs: {
        lang: 'en'
      }
    },

    data () {
        return {
            pages: [{
                title:'Alex'
            }]
        }
    },

    computed: {

      getName() {
        return this.$store.getters['alex/name'];
      },

      notes() {
        return this.$store.getters['alex/notes'];
      },

      ...mapGetters('alex',{
          name: "name",
          notes: "notes",
          hooks: "getHooks"
      }),

      listProducts() {
          return this.$store.getters['alex/getMyProducts'].data;
      },

      doneGo() {
            return this.$store.getters['alex/getGo'];
        }
    },

    methods: {

      addNew() {
        this.$store.dispatch('alex/addName', 'New name Alex');
      },
      addNote() {
        this.$store.dispatch('alex/addNote', 'New notes!!!');
      },
      ...mapActions('alex',[
            'addNameY',
            'getAPages',
            'getProducts'
          ]
      ),

    },

    created:function () {},

    mounted:function () {}
      
  }

</script>
<style scoped lang="scss">

  ul > li { color: #229718; }

</style>