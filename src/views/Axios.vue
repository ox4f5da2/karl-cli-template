<template>
  <div class="axios">
    <h1>This is an Ant-Design Page</h1>
    <div class="myInput">
      <a-input v-model:value="wd" placeholder="Basic usage">
        <template #prefix>
          <edit-two-tone />
        </template>
        <template #suffix>
          <a-tooltip title="百度引擎搜索">
            <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
          </a-tooltip>
        </template>
      </a-input>
    </div>

    <a-button type="primary" 
    :loading="ifLoading" 
    @click="getResult">
      {{ btnText }}
    </a-button>
    <div class="myTable">
      <a-table
        bordered
        :columns="columns"
        :data-source="data"
        :scroll="{ y: 240 }"
        :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
      />
    </div>
  </div>
</template>

<script>
import { apiExample } from '@/api/index';
import { message } from 'ant-design-vue';
import { EditTwoTone, InfoCircleOutlined } from '@ant-design/icons-vue';

export default {
  name: 'Axios',
  components: {
    EditTwoTone,
    InfoCircleOutlined,
  },
  data() {
    return {
      data: [],
      columns: [{
          title: 'type',
          dataIndex: 'type',
          width: 150,
        },{
          title: 'sa',
          dataIndex: 'sa',
          width: 150,
        },{
          title: 'q',
          dataIndex: 'q',
          width: 150
      }],
      ifLoading: false,
      wd: 'chrome',
      btnText: '发起Axios请求'
    }
  },
  methods: {
    async getResult() {
      const params = { word: this.wd };
      this.ifLoading = true;
      this.btnText = '发起请求中...'
      const { data } = await apiExample(params, this.callback);
      this.data = JSON.parse(data)?.g;
    },
    callback(status) {
      // status: 成功返回SUCCESS, 失败返回FAIL
      this.ifLoading = false;
      this.btnText = '发起Axios请求';
      status === "SUCCESS" ? message.success('请求成功!') : message.error('请求失败!');
    }
  }
}
</script>

<style scoped>
.myInput {
  margin: 10px auto;
  width: 50%;
}

.myTable {
  width: 50%;
  margin: 20px auto;
}

.myTable :deep(.ant-table tbody tr.table-striped){
  background-color: #fafafa;
}
</style>