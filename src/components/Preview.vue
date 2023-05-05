<script>
  import AccountCard from './partials/AccountCard.vue';
  export default {
    name: 'Preview',
    components: {
      AccountCard
    },
    data() {
      return {
        isLoaded: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.isLoaded = true;
      }, 2500);
    }
  }
</script>

<template>
  <div class="ms-wrapper">
    <div v-if="!isLoaded" class="loadingWindow h-100 d-flex justify-content-center align-items-center flex-column">
      <img src="/logo-boolflix.png" alt="Logo Boolflix">
      <div class="shadow"></div>
    </div>
    <div v-else class="selectAccount h-100">
      <AccountCard />
    </div>
  </div>
</template>  

<style lang="scss" scoped>
  @use '../scss/vars' as *;

  .ms-wrapper {
    height: 100vh;
    .loadingWindow {
      background: $primary-bg-grey;
  
      img {
        max-width: 30%;
      }
      .shadow {
        height: 2vw;
        width: 30%;
        background: radial-gradient($primary-logo-red 0%, $primary-bg-grey 75%);
      }
    }
  }
</style>