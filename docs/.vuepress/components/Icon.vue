<template>
  <div class="icon">
    <img :src="$withBase(`/images/private/icon/${src}`)" alt="">
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped>
.icon {
  display: inline-block;
}

img {
  width: 20px;
  height: 20px;
  vertical-align: text-bottom;
}
</style>