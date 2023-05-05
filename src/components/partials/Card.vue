<script>
  import CountryFlag from 'vue-country-flag-next';
  import { store } from "../../data/store.js";
  export default {
    name: 'Card',
    data() {
      return {
        store
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
      CountryFlag
    },
    computed: {
      setLanguage() {
        return (this.language === 'en') ? 'gb' : this.language;
      },
      setImageUrl() {
        return (this.img) ? (store.imgInfo.images.base_url + store.imgInfo.images.backdrop_sizes[0] + this.img) : '/image-not-found.png';
      }
    }
  }
</script>

<template>
  <ul>
    <li>{{ title }}</li>
    <li>{{ originalTitle }}</li>
    <li><country-flag :country='setLanguage' size='small'/></li>
    <li>{{ vote }}</li>
    <li><img :src="setImageUrl" :alt="title"></li>
  </ul>
</template>  

<style lang="scss" scoped>

</style>