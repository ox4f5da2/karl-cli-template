<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/antdesign">AntDesign</router-link> |
    <router-link to="/axios">Axios</router-link>
    
    <router-view v-slot="{ Component }">
      <keep-alive include="Axios">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .home {
    a {
      color: #42b983;
    }

    a:hover {
      color: #1890ff;
    }
  }
}
</style>
