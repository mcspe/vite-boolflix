<script>
  import { store } from "./data/store.js";
  import axios from "axios";
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  export default{
    name: 'App',
    components: {
      Header,
      Main
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getApi(){
        axios.get(store.apiUrl + store.selectedMedia, {
          params:{
            api_key: store.apiKey,
            query: store.searchBarString,
            language: ''
          }
        })
        .then(result => {
          store.searchResult = result.data;
          console.log(result.data);
        })
      }
    },
    mounted(){

    }
  }
</script>

<template>
  <Header @startSearch="getApi" /> 
  <Main />
</template>

<style lang="scss">
  
</style>
