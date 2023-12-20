  <template>
    <mars-dialog :visible="true" title="登录窗口" right="42%"  top="30%" bottom="30%" width="400" >
      <div class="ui-container" >
        <a-form :model="formState" :rules="rules" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">  
          <p></p>
          <a-form-item label="用户名" name="account">
            <a-input v-model:value="formState.account" :allowClear="true"  />
          </a-form-item>
          <a-form-item label="密码" name="password">
            <a-row :gutter="5">
              <a-col :span="19">
                <a-input-password v-model:value="formState.password" :allowClear="true"></a-input-password>
              </a-col>
              <a-col :span="5">
                <a-space size="small">
                  <mars-button class="small-btn" @click="onClickLogIn">登录</mars-button>
                </a-space>
              </a-col>
            </a-row>
          </a-form-item>
        </a-form>
      </div>
    </mars-dialog>
  </template>
  
  <script setup lang="ts">
  import { onMounted, reactive, ref } from "vue"
  import { TableColumnType, TableProps } from "ant-design-vue"
  import axios from "axios"
  import type { Dayjs } from "dayjs"
  import { $message, $notify, $alert } from "@mars/components/mars-ui/index"
  
  
  const visible = ref(true)
  const couter = ref(10)
  
  onMounted(() => {
    setTimeout(() => {
      couter.value = 100
    }, 2000)
  })
  
  interface FormState {
    account: string
    password: string
  }
  const formState = reactive<FormState>({
    account: "",
    password: ""
  })
  
  const rules = {
    account: [{ required: true, message: "请输入正确用户名", trigger: "blur" }]
  }
  
  
  // 输入框修改事件
  // const onTextChange = () => {
  //   $message("您的账户为：" + formState.account)
  // }
  
  // 渲染模型
  const onClickLogIn = () => {
      $message("登陆成功")
      const url = process.env.BASE_URL
      const url1 = url + "demo.html"
      window.open(url1)
  }  

  </script>
  <style lang="less">
  .infoView {
    overflow-y: auto;
  }
  
  .color-state {
    padding-bottom: 1.3px;
  }
  .ui-container {
    height: 100%;
    overflow-y: scroll;
  }
  </style>
