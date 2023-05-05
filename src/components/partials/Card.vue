<script>
  import CountryFlag from 'vue-country-flag-next';
  import { store } from "../../data/store.js";

  export default {
    name: 'Card',
    data() {
      return {
        store,
        maxRating: 5
      }
    },
    props: {
      title: String,
      originalTitle: String,
      language: String,
      vote: Number,
      img: String
    },
    components: {
      CountryFlag,
    },
    computed: {
      setLanguage() {
        return (this.language === 'en') ? 'gb' : this.language;
      },
      setImageUrl() {
        return (this.img) ? (store.imgInfo.images.base_url + store.imgInfo.images.backdrop_sizes[0] + this.img) : '/image-not-found.png';
      },
      starVote() {
        return Math.floor(this.vote / 2);
      }
    },
    mounted() {
      console.log(this.vote, Math.floor(this.vote / 2));
    }
  }
</script>

<template> 
  <ul>
    <li>{{ title }}</li>
    <li>{{ originalTitle }}</li>
    <li><country-flag :country='setLanguage' size='small'/></li>
    <li>
      <span 
        v-for="index in starVote" 
        :key="index">
        <font-awesome-icon icon="fa-solid fa-star" /></span>
      <span 
        v-for="index in (maxRating - starVote)" 
        :key="index">
        <font-awesome-icon icon="fa-regular fa-star" /></span>
    </li>
    
    <li><img :src="setImageUrl" :alt="title"></li>
  </ul>
</template>  

<style lang="scss" scoped>

</style>