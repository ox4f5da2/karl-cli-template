<template>
  <h1>This is the karl-cli Tool</h1>
  <h3>{{ msg }}</h3>
  <p>The cli has helped you install the following modules:</p>
  <ul>
    <li><a target="_blank" href="https://github.com/vuejs/router">Router</a></li>
    <li><a target="_blank" href="https://github.com/vuejs/vuex">Vuex</a></li>
    <li><a target="_blank" href="https://github.com/axios/axios">Axios</a></li>
    <li><a target="_blank" href="https://www.antdv.com/docs/vue/getting-started-cn">Ant-Design</a></li>
  </ul>
  <p>You can view the corresponding functions on the router page</p>
  <p>Author: <a target="_blank" href="https://github.com/ox4f5da2"><strong>Karl_fang</strong></a></p>
  <p>CLI Version: <strong>1.0.0</strong></p>
  <p>Date: <strong>2022-07-14</strong></p>
  <footer>Copyright © 2022 Karl_fang All Rights Reserved.</footer>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  text-decoration: underline;
  font-size: 18px;
}
a {
  color: #42b983;
}
footer {
  position: absolute;
  bottom: 20px;
  font-size: 12px;
  color: #8b7e75;
  left: 50%;
  transform: translateX(-50%);
}
</style>
