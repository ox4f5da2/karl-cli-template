<template>
  <div class="backTop" ref="backtop">
    <section :class="{ show: rocketFlag }" class="rocket" @click="rocket">
      <img :src="$withBase('/images/private/rocket.svg')" alt="返回顶部" title="返回顶部">
    </section>
  </div>
</template>

<script>
export default {
  props: {
    scrollStep: {
      default: 50,
      type: Number
    }
  },
  mounted() {
    this.interSectionObserver = new IntersectionObserver(this.handler, this.options);
    this.interSectionObserver.observe(this.$refs.backtop);
  },
  data() {
    return {
      epsilon: 50,
      rocketFlag: false,
      interSectionObserver: null,
      options: { threshold: 0 }
    }
  },
  methods: {
    handler(entries) {
      const {
        intersectionRect: { bottom: bottom1 },
        rootBounds: { height },
        boundingClientRect: { bottom: bottom2 },
        isIntersecting
      } = entries[0];
      // 从屏幕下方出现
      if (Math.abs(bottom1 - height) <= this.epsilon ) {
        this.rocketFlag = true;
      }
      // 从屏幕下方消失
      else if (!isIntersecting && bottom2 > 0 && Math.abs(bottom1 - 0) <= this.epsilon) {
        this.rocketFlag = false;
      }
    },
    step() {
      const currTop = document.documentElement.scrollTop - this.scrollStep;
      window.scrollTo(0, currTop);
      currTop >= 0 ? window.requestAnimationFrame(this.step) : window.cancelAnimationFrame(this.step);
    },
    rocket() {
      window.requestAnimationFrame(this.step);
    }
  }
}
</script>

<style scoped>
.rocket {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 100px;
  right: 20px;
  background-color: rgba(255, 255, 255, .9);
  box-shadow: 0 3px 6px -4px #0000003f, 0 6px 16px #00000034, 0 9px 30px 8px #0000001d;
  border-radius: 50%;
  cursor: pointer;
  z-index: 98;
  opacity: 0;
  transition: all .2s ease-out;
}

.rocket.show {
  opacity: 1;
}

.rocket img {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 5px;
  left: 4px;
}
</style>