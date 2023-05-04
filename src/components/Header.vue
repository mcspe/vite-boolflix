<script>
  import { store } from '../data/store.js'; 
  export default {
    name: 'Header',
    data() {
      return {
        store
      }
    }
  }
</script>

<template>
  <input 
    type="text" 
    placeholder="Cerca" 
    v-model="store.searchBarString"
    @keyup.enter="$emit('startSearch')">
  <button @click="$emit('startSearch')">Cerca</button>
</template>  

<style lang="scss" scoped>

</style>