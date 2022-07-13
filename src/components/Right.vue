<template>
  <div id="right">
    <p>这是Right组件</p>
    <router-link to="/Right/tab1">tab1</router-link>&nbsp;
    <router-link to="/Right/tab2">tab2</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Right",
}
</script>

<style scoped>
  #right {
    flex: 1;
    background-color: skyblue;
    height: 300px;
  }
</style>