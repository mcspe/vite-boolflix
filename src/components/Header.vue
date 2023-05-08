<script>
  import { store } from '../data/store.js'; 
  export default {
    name: 'Header',
    data() {
      return {
        store
      }
    },
    methods: {
      startSearch() {
        store.apiParams.page = 1;
        store.searchBarString = '';
        this.$emit('startSearch');
      }
    }
  }
</script>

<template>
  <header>
    <div class="account-bar float-end d-flex align-items-center gap-3 h-100 p-3">
      <div class="search rounded-pill d-flex align-items-center gap-3 h-100 p-2">
        <input 
          type="text" 
          placeholder="Cerca" 
          v-model="store.searchBarString"
          @keyup.enter="startSearch">
        <select 
          name="media" 
          id="media"
          v-model="store.selectedMedia"
          >
          <option value="movie">Film</option>
          <option value="tv">Serie TV</option>
          <option value="multi">Tutto</option>
        </select>
        <span @click="startSearch"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></span>
      </div>
      <div class="account-avatar h-100" :style="`background: ${store.activeAccount.avatar}`">
        <img src="/avatar.png" alt="avatar" class="img-fluid">
      </div>
    </div>
    <div class="d-flex align-items-center h-100">
      <div class="ms-logo h-100 p-3">
        <img src="/logo-boolflix.png" alt="Logo Boolflix">
      </div>
      <nav class="h100">
        <ul class="h100 m-0">
          <li
            v-for="(page, i) in store.pages"
            :key="i"
            class="h-100 d-inline-block mx-2">
            <button
              @click="$emit('goToPage', page)">
              {{ page }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
    
  </header>
</template>  

<style lang="scss" scoped>
  @use '../scss/vars' as *;
  header {
    height: 4.5rem;
    margin-bottom: .5rem;

    .account-bar {
      .search {
        background: whitesmoke;
        overflow: hidden;

        input, select {
          border: none;
          background: none;
        }
        span {
          cursor: pointer;
        }
      }
      .account-avatar {
        width: 2.5rem;
        cursor: pointer;
      }
    }

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