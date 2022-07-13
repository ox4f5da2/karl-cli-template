<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"><br>
    <button @click="name='Left'">显示Left组件</button>
    <button @click="name='Right'">显示Right组件</button>
    <hr>
    <div class="componentsBox">
      <keep-alive>
        <component :is="name"></component>
      </keep-alive>
    </div>
    <div v-for="item in list.slice(0, idx)" :key="item">{{item}}</div>
    <hr>
    <p>slot的使用</p>
    <Left>
      <p>这是slot</p>
    </Left>
  </div>

</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  name: 'App',
  data() {
    return {
      name: "Left",
      list: [1, 2, 3, 4, 5 , 6, 7, 8, 9],
      idx: undefined
    }
  },
  components: {
    HelloWorld,
    Left,
    Right
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.componentsBox {
  display: flex;
}
</style>
