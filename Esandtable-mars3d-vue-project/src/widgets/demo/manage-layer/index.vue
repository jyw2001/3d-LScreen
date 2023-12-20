<template>
    <a-table :columns="columns" :data-source="dataSource" bordered class="table">
      <template #bodyCell="{ column, text, record }">
        <template v-if="['id', 'pid', 'name','type','url','other'].includes(column.dataIndex)">
          <div>
            <a-input
              v-if="editableData[record.key]"
              v-model:value="editableData[record.key][column.dataIndex]"
              style="margin: -5px 0"
            />
            <template v-else>
              {{ text }}
            </template>
          </div>
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
          <div class="editable-row-operations">
            <span v-if="editableData[record.key]">
              <a-typography-link @click="save(record.key)">Save</a-typography-link>
              <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
                <a>Cancel</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a @click="edit(record.key)">Edit</a>
            </span>
          </div>
        </template>
      </template>
    </a-table>
  </template>
  <script lang="ts">
  import { cloneDeep } from "lodash-es"
  import { defineComponent, reactive, ref } from "vue"
  import type { UnwrapRef } from "vue"
  
  const columns = [
    {
      title: "ID",
      dataIndex: "id"
    },
    {
      title: "Pid",
      dataIndex: "pid"
    },
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Type",
      dataIndex: "type"
    },
    {
      title: "Url",
      dataIndex: "url"
    },
    {
      title: "Other",
      dataIndex: "other",
      width: "45%"
    },
    {
    title: "operation",
    dataIndex: "operation"
  }
  ]
  interface DataItem {
    key: string;
    id: string;
    pid: string;
    name: string;
    type: string;
    title: string;
    url: string;
    other: string | any;
  }
  const data: DataItem[] = []
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i.toString(),
      id: i.toString(),
      pid: (i + 1).toString(),
      name: `Edrward ${i}`,
      type: `123`,
      title: `321`,
      url: `456`,
      other: `any`
    })
  }
  export default defineComponent({
    setup() {
      const dataSource = ref(data)
      const editableData: UnwrapRef<Record<string, DataItem>> = reactive({})
  
      const edit = (key: string) => {
        editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0])
      }
      const save = (key: string) => {
        Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key])
        delete editableData[key]
      }
      const cancel = (key: string) => {
        delete editableData[key]
      }
      return {
        dataSource,
        columns,
        editingKey: " ",
        editableData,
        edit,
        save,
        cancel
      }
    }
  })
  </script>
  <style scoped>
  .editable-row-operations a {
    margin-right: 8px;
  }
  .table{
      margin-top: 3%;
    }
  </style>
