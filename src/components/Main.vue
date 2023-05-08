<script>
  import { store } from '../data/store.js'; 
  import Card from './partials/Card.vue';

  export default {
    name: 'Main',
    components:{
      Card,
    },
    data() {
      return {
        store
      }
    },
    methods: {
      addMedia(media) {
        store.myList.push(media);
      }
    }
  }
</script>

<template>
  <div class="container-fluid d-flex mx-auto flex-wrap">
    <Card 
      v-for="media in store.searchResult.results"
      :key="media.id" 
      :title="media.title || media.name"
      :originalTitle="media.original_title || media.original_name"
      :language="media.original_language"
      :vote="media.vote_average"
      :description="media.overview"
      :img="media.backdrop_path"
      @addToList="addMedia(media)"
      />
  </div>
</template>  

<style lang="scss" scoped>

</style>