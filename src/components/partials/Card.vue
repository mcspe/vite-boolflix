<script>
  import CountryFlag from 'vue-country-flag-next';
  export default {
    name: 'Card',
    props: {
      title: String,
      originalTitle: String,
      language: String,
      vote: Number
    },
    components: {
      CountryFlag
    },
    computed: {
      setLanguage() {
        return (this.language === 'en') ? 'gb' : this.language;
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
  </ul>
</template>  

<style lang="scss" scoped>

</style>