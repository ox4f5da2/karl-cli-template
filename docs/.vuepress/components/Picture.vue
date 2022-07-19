<template>
  <img class="myImg" ref="myimg" :data-url="$withBase(src)" 
    :src="$withBase('/images/common/default.svg')"
    :style="{ width: `${scale * 100}%`, height: `${scale * 100}%` }"
    :alt="title" :title="title">
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      require: true
    },
    title: {
      default: '',
      type: String
    },
    scale: {
      default: 1,
      type: Number
    },
    threshold: {
      type: Number,
      default: 0.5
    },
    position: {
      default: 'left',
      type: String
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(this.handle, { threshold: this.threshold });
    this.observer.observe(this.$refs.myimg);
  },
  data() {
    return {
      observer: null
    }
  },
  methods: {
    handle(entries) {
      if (entries[0].isIntersecting) {
        const img = this.$refs.myimg;
        img.src = img.dataset.url;
        img.addEventListener("load", () => this.observer.unobserve(this.$refs.myimg));
        img.addEventListener("error", () => img.src = this.$withBase('/images/private/imgError.svg'));
      }
    }
  }
}
</script>

<style scoped>
.myImg {
  margin-bottom: 20px;
}

img.myImg {
  border-radius: 10px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
}

img.myImg[src$="svg"] {
  width: 20%!important;
  height: 20%!important;
  padding: 5px 10px;
  box-shadow: none;
}
</style>