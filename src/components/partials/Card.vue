<script>
  import CountryFlag from 'vue-country-flag-next';
  import { store } from "../../data/store.js";

  export default {
    name: 'Card',
    data() {
      return {
        store,
        maxRating: 5,
        openAccordion: false
      }
    },
    props: {
      title: String,
      originalTitle: String,
      language: String,
      vote: Number,
      description : String,
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
        return (this.img) ? (store.imgInfo.images.base_url + store.imgInfo.images.poster_sizes[store.imgInfo.images.poster_sizes.length - 1] + this.img) : '/image-not-found.png';
      },
      starVote() {
        return Math.floor(this.vote / 2);
      }
    },
    emits: [
      'addToList'
    ]
  }
</script>

<template>
  <div class="media-card position-relative m-2">
    <img :src="setImageUrl" :alt="title" class="img-fluid">
    <div class="media-info overlay position-absolute h-100 w-100 p-3 flex-column justify-content-between">
      <h3>{{ title }}</h3>
      <div class="more-info text-center">
        <font-awesome-icon v-if="!openAccordion" @click="openAccordion = true" icon="fa-solid fa-chevron-down" />
        <font-awesome-icon v-else @click="openAccordion = false" icon="fa-solid fa-chevron-up" />
      </div>
    </div>
  </div> 
  <div class="media-info-accordion w-100 position-relative m-3" :class="{'d-none': !openAccordion}">
    <img :src="setImageUrl" :alt="title" class="img-fluid">
    <div class="overlay position-absolute h-100 w-100 p-5">
      <h2>{{ title }}</h2>
      <h3>{{ originalTitle }}</h3>
      <p>
        Ratings: 
        <span 
          v-for="index in starVote" 
          :key="index">
          <font-awesome-icon icon="fa-solid fa-star" /></span>
        <span 
          v-for="index in (maxRating - starVote)" 
          :key="index">
          <font-awesome-icon icon="fa-regular fa-star" /></span>
      </p>
      <p class="my-3">Country: <country-flag :country='setLanguage' size='normal' class="mx-1"/></p>
      <p class="my-5">Description: {{ description }}</p>

      <div class="ms-actions my-5 d-flex gap-3">
        <button class="rounded-5">Watch</button>
        <button @click="$emit('addToList')" class="rounded-5">Add to My List</button>
      </div>
      <button class="close-accordion position-absolute" @click="openAccordion = false"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
    </div>
  </div>
</template>  

<style lang="scss" scoped>
  @use '../../scss/vars' as *;
  .overlay {
    top: 0;
    left: 0;
    color: whitesmoke;
    background: linear-gradient(rgba($color: #000000, $alpha: .4) 50%, rgba($color: #000000, $alpha: .7) 100%);

  }
  .media-card {
    width: 300px;
    cursor: pointer;

    .media-info{
      display: none;
    }

    &:hover {
      .media-info {
        display: flex;

        .more-info {
          font-size: 1.5rem;
        }
      }
    }
  }

  .media-info-accordion {
    button {
      background: whitesmoke;
      color: $primary-bg-grey;
      padding: .5rem 1rem;
      border: none;
      line-height: normal;

      &:hover {
        color: black;
      }
    }
    .close-accordion {
      background: none;
      font-size: 1.5rem;
      color: whitesmoke;
      top: 1rem;
      right: 1rem;
    }
  }
</style>