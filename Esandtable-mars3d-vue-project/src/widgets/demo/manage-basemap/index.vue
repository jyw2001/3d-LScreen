<template>
    <a-table :row-selection="rowSelection" :columns="columns" :data-source="data" bordered class="table"/>
  </template>
  <script lang="ts">
  import { cloneDeep } from "lodash-es"
  import { defineComponent, computed, ref, unref } from "vue"
  import { Table } from "ant-design-vue"
  import type { UnwrapRef } from "vue"
  
  interface DataType {
    key: string | number;
    name: string;
    id: number | string;
    pid: number | string;
    icon: string;
    type: string;
    layer: string | any;
    show: string;
    url: string;
    other: string
  }
  
  const columns = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Id",
      dataIndex: "id"
    },
    {
      title: "Pid",
      dataIndex: "pid"
    },
    {
      title: "Icon",
      dataIndex: "icon"
    },
    {
      title: "Type",
      dataIndex: "type"
    },
    {
      title: "Layer",
      dataIndex: "layer"
    },
    {
      title: "Show",
      dataIndex: "show"
    },
    {
      title: "Url",
      dataIndex: "url"
    },
    {
      title: "Other",
      dataIndex: "other"
    }
  ]
  
  const data: DataType[] = []
  for (let i = 0; i < 46; i++) {
    data.push({ 
      key: i,
      name: `Edward King ${i}`,
      id: i,
      pid: i,
      icon: `123`,
      type: `1234`,
      layer: `123`,
      show: `true`,
      url: `https`,
      other: `other`
    })
  }
  
  export default defineComponent({
    setup() {
      const selectedRowKeys = ref<DataType["key"][]>([]) // Check here to configure the default column
  
      const onSelectChange = (changableRowKeys: string[]) => {
        console.log("selectedRowKeys changed: ", changableRowKeys)
        selectedRowKeys.value = changableRowKeys
      }
  
      const rowSelection = computed(() => {
        return {
          selectedRowKeys: unref(selectedRowKeys),
          onChange: onSelectChange,
          hideDefaultSelections: true,
          selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
              key: "odd",
              text: "Select Odd Row",
              onSelect: changableRowKeys => {
                let newSelectedRowKeys = []
                newSelectedRowKeys = changableRowKeys.filter((_key, index) => {
                  if (index % 2 !== 0) {
                    return false
                  }
                  return true
                })
                selectedRowKeys.value = newSelectedRowKeys
              }
            },
            {
              key: "even",
              text: "Select Even Row",
              onSelect: changableRowKeys => {
                let newSelectedRowKeys = []
                newSelectedRowKeys = changableRowKeys.filter((_key, index) => {
                  if (index % 2 !== 0) {
                    return true
                  }
                  return false
                })
                selectedRowKeys.value = newSelectedRowKeys
              }
            }
          ]
        }
      })
      
      return {
        data,
        columns,
        selectedRowKeys,
        rowSelection
      }
    }
  })
  </script>
  <style>
    .table{
      margin-top: 3%;
    }
</style>
