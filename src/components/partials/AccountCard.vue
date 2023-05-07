<script>
  import { store } from '../../data/store';
  export default {
    name: 'AccountCard',
    data() {
      return {
        store
      }
    }
  }
</script>

<template>
  <div class="ms-wrapper d-flex justify-content-center align-items-center">
    <div class="ms-account text-center"
      v-for="(account, i) in store.accounts"
      :key="i"
      @click="$emit('login', i)">
      <div 
        class="ms-avatar mx-3"
        :style="`background: ${account.avatar}`">
        <img src="/avatar.png" alt="Avatar" class="img-fluid">
      </div>
      <span>{{ account.name }}</span>
    </div>
  </div>
</template>  

<style lang="scss" scoped>
  @use '../../scss/vars' as *;
  .ms-wrapper {
    height: 100vh;
    background: $primary-bg-grey;
    cursor: pointer;
    color: whitesmoke;

    .ms-avatar{
      height: 120px;
      width: 120px;
    }
  }
</style>