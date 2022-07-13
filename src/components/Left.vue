<template>
  <div id="left">
    <p>这是Left组件</p>
    <p>当前count的值为: {{ count }}</p>
    <button @click="count++">+1</button>
    <slot>
      <p>这是slot的默认内容</p>
    </slot>
  </div>
</template>

<script>
  export default {
    name: "Left",
    data() {
      return {
        count: 0
      }
    },
    created() {
      console.log("Left组件被创建了");
    },
    destroyed() {
      console.log("Left组件被销毁了");
    },
    activated() {
      console.log("Left组件被激活了");
    },
    deactivated() {
      console.log("Left组件被缓存了");
    }
  }
</script>

<style scoped>
  #left {
    flex: 1;
    background-color: orange;
    height: 300px;
  }
</style>