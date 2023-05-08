<script>
  import { store } from "./data/store.js";
  import axios from "axios";
  import Preview from './components/Preview.vue';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  export default{
    name: 'App',
    components: {
      Preview,
      Header,
      Main
    },
    data() {
      return {
        isLogged: false,
        store
      }
    },
    methods: {
      getConfiguration() {
        axios.get(store.getImgUrl, {
          params:{
            api_key: store.apiKey
          }
        })
        .then(result => {
          store.imgInfo = result.data;
          // console.log(store.imgInfo.images);
        })
      },
      getApi() {
        axios.get(store.apiUrl + store.selectedMedia, {
          params:{
            api_key: store.apiKey,
            query: store.searchBarString,
            language: ''
          }
        })
        .then(result => {
          store.searchResult = result.data;
          //console.log(result.data);
        })
      },
      login(i) {
        this.isLogged = true;
        store.activeAccount = store.accounts[i];
      }
    },
    mounted(){
      this.getConfiguration();
    }
  }
</script>

<template>
  <div 
    class="preview"
    v-if="!isLogged">
    <Preview @login="login"/>
  </div>
  <div 
    class="appBoolflix"
    v-else>
    <Header @startSearch="getApi" /> 
    <Main />
  </div>
</template>

<style lang="scss">
  @use './scss/main.scss';
  @use './scss/vars' as *;
  .appBoolflix {
    min-height: 100vh;
    background: linear-gradient(darken($color: $primary-bg-grey, $amount: 25%) 0%, $primary-bg-grey 40%,);
  }
</style>
