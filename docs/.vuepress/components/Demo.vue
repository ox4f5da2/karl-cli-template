<template>
  <div class="demo">
    <button @click="cnt++">请点击我</button>
    <span>点击次数：<span class="result">{{ cnt }}</span></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cnt: 0
    }
  }
}
</script>

<style scoped>
button {
  background-color: #007fff;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
  border: 0;
  color: rgba(255, 255, 255, .8);
  margin-right: 20px;
}

.result {
  font-weight: 700;
  text-decoration: underline;
}
</style>