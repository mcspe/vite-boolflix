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
        if (!store.myList.includes(media)) store.myList.push(media);
      },
      newApiCall(n) {
        store.apiParams.page += n;
        this.$emit('apiCall', store.currentApiUrl);
      }
    }, 
    mounted() {
      console.log(store.searchResult);
    }
  }
</script>

<template>
  <div 
    class="container-fluid d-flex mx-auto flex-wrap pb-5"
    v-if="store.searchResult.results.length">
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
      <div class="pages w-100 my-3 d-flex justify-content-center">
        <button 
          v-if="store.searchResult.page > 1"
          @click="newApiCall(-1)">
          Prev
        </button>
        <button 
          v-if="store.searchResult.page < store.searchResult.total_pages"
          @click="newApiCall(+1)">
          Next 
        </button>
      </div>
    </div>
    <div 
      v-else
      class="container-fluid text-center mx-auto pb-5">
      <h2>No results available for your search</h2>
    </div>
</template>  

<style lang="scss" scoped>
  .pages button{
    background: none;
    border: none;
    padding: 0;
    margin: 0 1rem;
    color: whitesmoke;
    &:hover {
      text-decoration: underline;
    }
  }
  h2 {
    color: whitesmoke;
    font-style: italic;
  }
</style>