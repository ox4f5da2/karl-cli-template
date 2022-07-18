<template>
  <h1>Welcome to karl-cli Tool</h1>
  <p>The cli has helped you install the following modules:</p>
  <ul>
    <li><a target="_blank" href="https://github.com/vuejs/router">Router</a></li>
    <li><a target="_blank" href="https://github.com/vuejs/vuex">Vuex</a></li>
    <li><a target="_blank" href="https://github.com/axios/axios">Axios</a></li>
    <li><a target="_blank" href="https://www.antdv.com/docs/vue/getting-started-cn">Ant-Design</a></li>
  </ul>
  <p>You can view the corresponding functions on the router page</p>
  <p>This cli tool provides two template for users to choose:</p>
  <ul>
    <li>
      <a-tooltip title="Based on vue-cli">
        vue3-template
      </a-tooltip>
    </li>
    <li>
      <a-tooltip title="Based on vuepress">
        vuepress-template
      </a-tooltip>
    </li>
  </ul>
  <p>The following is other supplementary instructions about the project</p>
  <p>CLI-Version: <strong>1.0.0</strong></p>
  <p>Date: <strong>2022-07-18</strong></p>
  <p>Document: <a target="_blank" href="https://ox4f5da2.github.io/plugin/guide/karl-cli.html"><strong>Instruction Manual</strong></a></p>
  <p>Author: <a target="_blank" href="https://github.com/ox4f5da2"><strong>Karl_fang</strong></a></p>
  <footer>Copyright © 2022 Karl_fang All Rights Reserved.</footer>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1 {
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  font-size: 18px;
  font-weight: 700;
}
a {
  color: #42b983;
  text-decoration: underline;
}
footer {
  text-align: center;
  font-size: 12px;
  color: #8b7e75;
}
</style>
