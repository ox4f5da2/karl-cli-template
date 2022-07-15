<template>
  <div class="Table">
    <table>
      <tbody>
        <tr v-for="(item, index) in settings" :key="item.name">
          <td v-if="index === 0" colspan="2" :rowspan="settings.length+1"><img class="img" :src="$withBase(item.value)" /></td>
          <td v-if="index !== 0"><img class="info" :src="$withBase(`/images/common/${item.name}.svg`)" /><span>{{ item.name }}</span></td>
          <td v-if="index !== 0" 
            :class="{ fail: item.name === '状态' && item.value === '已拒绝', success: item.name === '状态' && item.value === '已发布 - 公开发布', value: true }">{{ item.value }}</td>
        </tr>
        <tr>
          <td><img class="info" :src="$withBase(`/images/common/链接.svg`)" /><span>链接</span></td>
          <td v-if="link"><a :href="link" target="_blank">详情信息</a></td>
          <td v-else>暂无链接</td>
        </tr>
      </tbody>
    </table>
    <aside :class="{ badge: true, warning: version === '敬请期待' }">{{ version === '敬请期待' ? version : `V ${version}` }}</aside>
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      default: [],
      type: Array,
      require: true
    },
    link: {
      default: '',
      type: String
    },
    version: {
      default: '敬请期待',
      type: String
    }
  }
}
</script>

<style scoped>
.Table {
  position: relative;
  --badge-success-color: 82, 196, 26;
  --badge-warning-color: 231, 191, 0;
  --badge-corner-opacity: .8;
}

.img {
  width: 5rem;
  height: 5rem;
  vertical-align: middle;
  filter: drop-shadow(2px 2px 2px rgba(0,0,0,.5));
}

table tr:first-child td {
  min-width: 150px;
  text-align: center;
}

.img:hover {
  cursor: pointer;
  animation: shake .5s linear;
}

@keyframes shake {
  0% { transform: rotate(20deg); }
  50% { transform: rotate(-20deg); }
  70% { transform: rotate(10deg); }
  85% { transform: rotate(-10deg); }
  95% { transform: rotate(5deg); }
  100% { transform: rotate(0); }
}

table tr:nth-child(n+2) td:first-child {
  min-width: 70px;
  font-weight: 700;
  position: relative;
  cursor: pointer;
}

img.info {
  display: inline-block;
  width: 70px;
  text-align: center;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  transform: translateX(25px);
  transition: all .2s ease-out;
}

table tr:nth-child(n+2) td:first-child:hover img.info {
  transform: translateX(0%);
}

table tr:nth-child(n+2) td:first-child:hover img.info ~span {
  opacity: 1;
}

img.info ~span {
  opacity: 0;
  transition: all .3s ease-out;
}

.success,
.fail {
  font-weight: 700;
}

.success {
  color: #10c469;
}

.fail {
  color: #dc362f;
}

.value {
  min-width: 350px;
  max-width: 400px;
  white-space: nowrap;
  overflow: scroll;
}

.value::-webkit-scrollbar {
  display: none;
}

.badge {
  position: absolute;
  top: 10px;
  left: -8px;
  background-color: rgb(var(--badge-success-color));
  border-radius: 2px;
  border-bottom-left-radius: 0;
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  padding: 3px 8px;
  cursor: pointer;
}

.badge::before {
  content: "";
  width: 0;
  height: 0;
  border-top: 3px solid rgba(var(--badge-success-color), var(--badge-corner-opacity));
  border-left: 4px solid transparent;
  border-right: 4px solid rgba(var(--badge-success-color), var(--badge-corner-opacity));
  border-bottom: 3px solid transparent;
  position: absolute;
  top: 100%;
  left: 0;
}

.badge::after {
  content: "";
  position: absolute;
  top: 0;
  left: -12px;
  width: 8px;
  height: 100%;
  background-color: rgba(255, 255, 255, .7);
  transform: skewX(-20deg);
  transition: all .25s linear;
}

.badge:hover::after {
  left: calc(100% + 10px);
}

.badge.warning {
  background-color: rgb(var(--badge-warning-color));
}

.badge.warning::before {
  border-top-color: rgba(var(--badge-warning-color), var(--badge-corner-opacity));
  border-right-color: rgba(var(--badge-warning-color), var(--badge-corner-opacity));
}
</style>