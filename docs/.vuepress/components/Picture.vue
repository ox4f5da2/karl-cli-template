<template>
  <div id="myImg">
    <img :src="$withBase(src)" 
    :style="{ width: `${scale * 100}%`, height: `${scale * 100}%` }"
    :alt="title" :title="title">
  </div>
</template>

<script>
export default {
  props: {
    src: {
      default: '',
      type: String
    },
    title: {
      default: '',
      type: String
    },
    scale: {
      default: 1,
      type: Number
    }
  }
}
</script>

<style scoped>
#myImg {
  margin-bottom: 20px;
}

#myImg img {
  border-radius: 10px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
}


</style>