<script>
  export default {
    name: 'Card',
    props: {
      title: String,
      originalTitle: String,
      language: String,
      vote: Number
    }
  }
</script>

<template>
  <ul>
    <li>{{ title }}</li>
    <li>{{ originalTitle }}</li>
    <li>{{ language }}</li>
    <li>{{ vote }}</li>
  </ul>
</template>  

<style lang="scss" scoped>

</style>