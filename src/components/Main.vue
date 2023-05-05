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
    }
  }
</script>

<template>
  <Card 
    v-for="media in store.searchResult.results"
    :key="media.id" 
    :title="media.title || media.name"
    :originalTitle="media.original_title || media.original_name"
    :language="media.original_language"
    :vote="media.vote_average"
    :img="media.backdrop_path"
    />
</template>  

<style lang="scss" scoped>

</style>