<template>
  <div>
    <section id="banner" ref="banner">
      <img v-for="(item,index) in imgs" :key="item.id" 
        :src="$withBase(item.src)" 
        :style="{left: `${leftList[index]}px`}" 
        :alt="item.title"
        :title="item.title">
      <div class="left" @click="preImg"></div>
      <div class="right" @click="nextImg" ref="rightBtn"></div>
      <div class="indicator">
        <span :class="{ dot: true, active: currentIndex === item.id}" v-for="item in imgs" :key="item.id"></span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    imgList: {
      default: [],
      type: Array
    }
  },
  created() {
    this.imgs.forEach((item, index) => this.leftList[index] = index * 640);
  },
  mounted() {
    const { rightBtn, banner } = this.$refs;
    let timer = null;
    function playImg() {
      timer = setInterval(() => rightBtn.click(), 5000);
    }
    playImg();
    banner.addEventListener("mouseenter", () => clearInterval(timer));
    banner.addEventListener("mouseleave", playImg);
  },
  data() {
    return {
      imgs: this.imgList,
      leftList: [],
      currentIndex: 0,
      imgWidth: 640
    }
  },
  methods: {
    nextImg() {
      const idx = this.currentIndex + 1, width = this.imgWidth;
      if(idx === this.imgs.length) {
        this.leftList = this.leftList.map((item, index) => width * index);
        this.currentIndex = 0;
      }
      else {
        this.leftList = this.leftList.map(item => item - width);
        this.currentIndex++;
      }

    },
    preImg() {
      const idx = this.currentIndex - 1, width = this.imgWidth, len = this.imgs.length - 1;
      if(idx === -1) {
        this.leftList = this.leftList.map((item, index) => width * (index - len));
        this.currentIndex = this.imgs.length - 1;
      }
      else {
        this.leftList = this.leftList.map(item => item + width);
        this.currentIndex--;
      }

    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

#banner {
  --arrow-color: #ccc;
  --arrow-hover-color: orange;
}

#banner {
  width: 640px;
  height: 400px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  margin-top: 20px;
}

#banner img {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: all .3s linear;
}

#banner .left,
#banner .right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--arrow-color);
  transition: all .5s linear;
}

#banner .left {
  left: -60px;
}

#banner .right {
  right: -60px;
}

#banner:hover .left {
  left: 20px;
}

#banner:hover .right {
  right: 20px;
}

#banner .left::before,
#banner .right::before {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
}

#banner .left::before {
  transform: translate(-25%, -50%) rotate(45deg) ;
  border-left: 2px solid var(--arrow-color);
  border-bottom: 2px solid var(--arrow-color);
}

#banner .right::before {
  transform: translate(-75%, -50%) rotate(45deg) ;
  border-right: 2px solid var(--arrow-color);
  border-top: 2px solid var(--arrow-color);
}

#banner .left:hover,
#banner .left:hover::before,
#banner .right:hover,
#banner .right:hover::before {
  cursor: pointer;
  border-color: var(--arrow-hover-color);
}

.indicator {
  display: inline-block;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  padding: 0 10px;
}

.indicator span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: var(--arrow-color);
  border-radius: 50%;
}

.indicator span:nth-child(n+2) {
  margin-left: 10px;
}

.indicator span.active {
  background-color: var(--arrow-hover-color);
}
</style>