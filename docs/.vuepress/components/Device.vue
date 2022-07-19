<template>
  <div>
    <section :class="{ tip: true, phone: type === '手机', iPad: type === '平板', pc: type === '电脑', unknown: type === '未知设备' }">
      <div class="title">
        <img :src="$withBase(`/images/private/icon/${icon}.svg`)" 
          :alt='`${icon}图标`' 
          :title="icon" />
        <span>提示</span>
      </div>
      <span v-if="['未知设备'].includes(type)">暂未检测出您正在使用的设备类型! 请刷新或更换设备浏览该页面</span>
      <span v-else>
        <span>您现在正在使用<strong>{{ type }}</strong>浏览文档!</span>
        <span v-if="['手机'].includes(type)">文档中的表格、图片等元素在手机端显示效果不佳, 为了您有更好的体验, 建议使用PC端浏览该页面! </span>
      </span>
      <img class="close" :src="$withBase('/images/private/close.svg')" alt="关闭按钮" title="点击关闭" @click="closeTip" />
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    const { isTablet, isPhone, isAndroid, isPc } = this.os();
    if (isAndroid || isPhone) {
      this.type = '手机';
      this.icon = 'warning';
    }
    else if (isTablet) {
      this.type = '平板';
      this.icon = 'tip';
    }
    else if (isPc) {
      this.type = '电脑';
      this.icon = 'tip';
    }
    else {
      this.type = '未知设备';
      this.icon = 'error';
    }
  },
  data() {
    return {
      type: '',
      icon: ''
    }
  },
  methods: {
    closeTip(e) {
      const el = e.target.parentNode;
      el.classList.add("rm");
      el.addEventListener("transitionend", () => el.parentNode.removeChild(el));
    },
    os () {
      let ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox &&
          /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
      return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
      }
    }
  }
}
</script>

<style scoped>
.tip {
  --warning-color-deprecated-bg: #fffbe6;
  --warning-color-deprecated-border: #ffe58f;
  --success-color-deprecated-bg: #f6ffed;
  --success-color-deprecated-border: #b7eb8f;
  --error-color-deprecated-bg: #fff2f0;
  --error-color-deprecated-border: #ffccc7;
}

.tip {
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  padding: 8px 15px;
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5715;
  word-wrap: break-word;
  border-radius: 5px;
  position: relative;
  opacity: 1;
  transition: all .5s linear;
}

.tip.rm {
  opacity: 0;
  transform: translateX(-100%);
}

.tip .title {
  font-size: 18px;
}

.tip .title img {
  width: 20px;
  height: 20px;
  vertical-align: text-bottom;
}

.tip.phone {
  background-color: var(--warning-color-deprecated-bg);
  border: 1px solid var(--warning-color-deprecated-border);
}

.tip.iPad,
.tip.pc {
  background-color: var(--success-color-deprecated-bg);
  border: 1px solid var(--success-color-deprecated-border);
}

.tip.unknown {
  background-color: var(--error-color-deprecated-bg);
  border: 1px solid var(--error-color-deprecated-border);
}

img.close {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 15px;
  height: 15px;
  transition: all .2s linear;
}

img.close:hover {
  transform: rotate(90deg);
  cursor: pointer;
}
</style>