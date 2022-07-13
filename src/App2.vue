<template>
  <div>

    <p>hello world</p>
    <a href="#/index">index</a>&nbsp;
    <a href="#/Left">Left</a>&nbsp;
    <a href="#/Right">Right</a>&nbsp;
		<hr />
    <!--只要在项目中安装和配置了vue-router, 就可以使用router-view 这个组件了-->
		<!-- 它的作用很单纯:占位符-->
    <!-- 在.vue文件中使用<router-view></router-view> -->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'router',
}
</script>

<style scoped>

</style>