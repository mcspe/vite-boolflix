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
  <header class="d-flex align-items-center">
    <div class="ms-logo h-100 p-3">
      <img src="/logo-boolflix.png" alt="Logo Boolflix">
    </div>
    <nav class="h100">
      <ul class="h100 m-0">
        <li
          v-for="(page, i) in store.pages"
          :key="i"
          class="h-100 d-inline-block mx-2">
          <button>{{ page }}</button>
        </li>
      </ul>
    </nav>
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
  </header>
</template>  

<style lang="scss" scoped>
  @use '../scss/vars' as *;
  header {
    height: 4.5rem;
    margin-bottom: .5rem;

    .ms-logo {
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    nav{
      li {
        list-style: none;

        button {
          background: none;
          border: none;
          color: whitesmoke;

          &:hover {
            color: $primary-logo-red;
          }
        }
      }
    }
  }
</style>