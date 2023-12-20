<template>
  <div class="container">
    <div class="left-box">
      <Map></Map>
    </div>
    <div class="right-box">
      <Manage></Manage>
    </div>
  </div>
  
  <!-- <a-space style="position: absolute; top: 10px; left: 10px">
    路由切换测试：
    <mars-button @click="toWidget">打开widget地图</mars-button>
    <mars-button @click="toMap">打开空白地图</mars-button>
  </a-space> -->
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import Map from "./map.vue"
import Widget from "./widget.vue"
import Manage from "./manage.vue"


const router = useRouter()

const toMap = () => {
  router.push("map")
}
const toWidget = () => {
  router.push("widget")
}
</script>

<style>
.container {
  overflow: auto; /* 清除浮动 */
  height: 100%;
}
.left-box{
  width: 50%;
  height: 100%;
  float: left;
}
.right-box{
  width: 50%;
  float:right;
  height: 100%;
}
</style>
