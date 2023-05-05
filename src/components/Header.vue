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
  <div>
    <input 
      type="text" 
      placeholder="Cerca" 
      v-model="store.searchBarString"
      @keyup.enter="$emit('startSearch')">
    <button @click="$emit('startSearch')">Cerca</button>
    <label for="media">Scegli la categoria</label>
    <select 
      name="media" 
      id="media"
      v-model="store.selectedMedia"
      >
      <option value="movie">Film</option>
      <option value="tv">Serie TV</option>
      <option value="multi">Tutto</option>
    </select>
  </div>
</template>  

<style lang="scss" scoped>

</style>