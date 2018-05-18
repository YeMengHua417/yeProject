<template>
  <div>
    <h1>hhihi</h1>
    <h2>{{name}}</h2>
  </div>


</template>

<script>
    export default {
        name: "showPage",
      data(){
          return {

            name:this.$store.getters.name

          }
      }
    }
</script>

<style scoped>

</style>
