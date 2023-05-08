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
        store,
        homeApiUrl: 'https://api.themoviedb.org/3/trending/all/week',
        movieApiUrl: 'https://api.themoviedb.org/3/trending/movie/week',
        tvApiUrl: 'https://api.themoviedb.org/3/trending/all/week'
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
      resetSearch() {
        store.searchResult = [];
      },
      getApi(apiUrl) {
        axios.get(apiUrl, {
          params:{
            api_key: store.apiKey,
            query: store.searchBarString,
            language: store.apiParams.language,
            page: store.apiParams.page
          }
        })
        .then(result => {
          console.log(result.data);
          store.searchResult = [];
          store.searchResult = result.data;
          store.currentApiUrl = apiUrl;
        })
      },
      login(i) {
        this.isLogged = true;
        store.activeAccount = store.accounts[i];
      },
      selectPage(page) {
        switch (page) {
          case 'home':
            this.getApi(this.homeApiUrl);
            break;
          case 'movies':
            this.getApi(this.movieApiUrl);
            break;
          case 'tv shows':
            this.getApi(this.tvApiUrl);
            break;
          case 'my list':
            this.resetSearch();
            store.searchResult.results = store.myList;
            break;
        }
      }
    },
    computed: {
      setApiUrl() {
        return store.apiUrl + store.selectedMedia;
      }
    },
    mounted(){
      this.getConfiguration();
      this.getApi(this.homeApiUrl);
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
    <Header @startSearch="getApi(setApiUrl)" @goToPage="selectPage"/> 
    <Main @apiCall="getApi(store.currentApiUrl)" />
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
