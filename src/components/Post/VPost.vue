<template>
  <div class="bv-example-row pt-4">
    <template v-if="post">
      <h1>{{ post.title.rendered }}</h1>
      <div v-html="post.content.rendered"></div>
    </template>
    <Loader v-else/>
  </div>
</template>

<script>
    import axios from "axios";
    import Loader from "../partials/Loader.vue";
    import { mapGetters } from "vuex";
    import SETTINGS from "../../settings";

    export default {

        name:'Post',

        components: {  Loader },

        data() {
            return {
                post: false,
                title:''
            };
        },

        metaInfo() {
            return {
                title: this.title,
                meta: [
                    { vmid: 'description', name: 'description', content: 'Description example' }
                ]
            }
        },

        beforeMount() {
            this.getPost();
        },

        methods: {
            getPost: function() {
                axios
                    .get(
                        SETTINGS.API_BASE_PATH + "posts?slug=" + this.$route.params.postSlug
                    )
                    .then(response => {
                        this.post = response.data[0];
                        this.title = this.post.title.rendered;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        }
    };
</script>
