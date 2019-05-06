<template>
  <div class="widget pages">
    <p>Test...</p>
  </div>
</template>


<script>

  import api from "../../api";

  export default {
    name: 'VMyPage',
    props: ['text','type'],

    created:function () {

      console.log('created');
      
    },
    mounted:function () {

      console.log('mounted:');

    }
  }

</script>
