<template>
  <div id="showVideo">
    <span class="tip">点击观看示例视频</span>
    <img class="video" @click="showVideo" :src="$withBase('/images/common/video.svg')" alt="示例视频" title="示例视频">
    <section :class="{ myVideo:true, active: ifShow }">
      <video controls>
        <source :src="$withBase(videoSrc)">
        你的浏览器不支持播放视频
      </video>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      videoSrc: this.src,
      ifShow: false
    }
  },
  methods: {
    showVideo() {
      this.ifShow = !this.ifShow
    }
  }
}
</script>

<style scoped>
#showVideo {
  display: inline-block;
}

.tip {
  color: #ccc;
  font-size: 14px;
}

.video {
  width: 20px;
  height: 20px;
  cursor: pointer;
  vertical-align: top;
}

.myVideo video {
  width: 320px;
  height: 0;
  opacity: 0;
  transition: all .3s ease-out;
}

.active video {
  opacity: 1;
  height: 200px;
}

</style>