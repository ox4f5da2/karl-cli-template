<template>
  <div class="home">
    <img alt="karl-cli logo" src="../assets/logo.png">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>


<style scoped>
img {
  margin-top: 20px;
}
</style>