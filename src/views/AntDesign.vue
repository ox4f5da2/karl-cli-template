<template>
  <div class="antDesign">
    <h1>This is an Ant-Design Page</h1>
    <div class="timeLine">
      <a-timeline>
        <a-timeline-item color="red">B站开始学习CLI工具开发 2022-07-11</a-timeline-item>
        <a-timeline-item>
          <template #dot>
            <CheckCircleTwoTone two-tone-color="#52c41a" />
          </template>
          完成基本配置 2022-07-12
        </a-timeline-item>
        <a-timeline-item>
          <template #dot>
            <CheckCircleTwoTone two-tone-color="#52c41a" />
          </template>
          完成编写命令可选项 2022-07-12
        </a-timeline-item>
        <a-timeline-item color="red">开始编写终端自定义命令 2022-07-13</a-timeline-item>
        <a-timeline-item>
          <template #dot>
            <CheckCircleTwoTone two-tone-color="#52c41a" />
          </template>
          完成创建项目命令功能 2022-07-13
        </a-timeline-item>
        <a-timeline-item>
          <template #dot>
            <CheckCircleTwoTone two-tone-color="#52c41a" />
          </template>
          完成创建vue组件命令功能 2022-07-13
        </a-timeline-item>
        <a-timeline-item color="red">开始开发文档的编写 2022-07-13</a-timeline-item>
        <a-timeline-item>
          <template #dot>
            <CheckCircleTwoTone two-tone-color="#52c41a" />
          </template>
          完成模板的克隆功能 2022-07-13
        </a-timeline-item>
        <a-timeline-item>
          <template #dot>
            <CheckCircleTwoTone two-tone-color="#52c41a" />
          </template>
          完成Ant-Design的导入使用 2022-07-13
        </a-timeline-item>
        <a-timeline-item>
          <template #dot>
            <CheckCircleTwoTone two-tone-color="#52c41a" />
          </template>
          完成文档的编写 2022-07-15
        </a-timeline-item>
        <a-timeline-item>
          <template #dot>
            <CheckCircleTwoTone two-tone-color="#52c41a" />
          </template>
          完成文档的发布 2022-07-16
        </a-timeline-item>
        <a-timeline-item>
          <template #dot>
            <CheckCircleTwoTone two-tone-color="#52c41a" />
          </template>
          完成karl-cli的npm包的发布 2022-07-18
        </a-timeline-item>
        <a-timeline-item>
          <template #dot>
            <SmileOutlined />
          </template>
          未完待续...
        </a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>

<script>
import { SmileOutlined, CheckCircleTwoTone } from '@ant-design/icons-vue';

export default {
  components: {
    SmileOutlined,
    CheckCircleTwoTone
  }
}
</script>

<style scoped>
.timeLine {
  width: 20%;
  margin: 20px auto;
}

.timeLine >>> .ant-timeline-item-content {
  text-align: left;
}
</style>