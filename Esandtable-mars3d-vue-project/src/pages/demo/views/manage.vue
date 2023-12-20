<template>
    <a-layout>
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="white"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">底图管理</a-menu-item>
          <a-menu-item key="2">图层管理</a-menu-item>
          <a-menu-item key="3">数据管理</a-menu-item>
          <a-menu-item key="4">用户管理</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
        <!-- <a-breadcrumb :style="{ margin: '16px 0' , minHeight:'10%'}">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->
        <div :style="{ background: '#fff', padding: '24px', minHeight: '95%' }">
            <!-- <Widget></Widget> -->
              <Basemap v-if="selectedKeys.includes('1')"/>
              <Layer v-if="selectedKeys.includes('2')" />
              <User v-if="selectedKeys.includes('4')"/>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        实景三维数字孪生系统后台管理 复旦大学 杭州师范大学
      </a-layout-footer>
    </a-layout>
  </template>
  <script lang="ts">
  import { defineComponent, ref, watch } from "vue"
  import Basemap from "@mars/widgets/demo/manage-basemap/index.vue"
  import Layer from "@mars/widgets/demo/manage-layer/index.vue"
  import User from "@mars/widgets/demo/manage-user/index.vue"

  export default defineComponent({
    setup() {
        const selectedKeys = ref<string[]>(["1"])

        // 监听selectedKeys的变化
        watch(selectedKeys, (newKeys) => {
          // 清除其他选中项，只保留当前选中项
          selectedKeys.value = newKeys.slice(-1)
        })
        return {
          selectedKeys
        }
    },
    components: { Basemap, Layer, User }

  })
  </script>
  <style>
  #components-layout-demo-fixed .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
  .site-layout .site-layout-background {
    background: #fff;
  }
  
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }

  </style>
