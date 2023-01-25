<template>
  <div class="w-full h-full bg-slate-500 flex justify-center items-center">
    <el-card shadow="hover">
      <template #header>
        <div class="flex justify-between">
          <span>登录</span>
          <el-button class="button" text>账号密码登录</el-button>
        </div>
      </template>
      <el-form :model="formData" label-width="60px" label-position="left">
        <el-form-item label="用户名">
          <el-input class="w-96" v-model="formData.username" size="large" placeholder="Please input username" clearable />
        </el-form-item>
        <el-form-item label="密码">
          <el-input class="w-96" type="password" size="large" placeholder="Please input password" v-model="formData.password" clearable />
        </el-form-item>
        <el-button class="w-full" type="primary" @click="handleLogin">Login</el-button>
        <div class="text-center my-4">
          <el-button type="primary" text @click="handleTestLogin">点击使用测试账号登录</el-button>
        </div>

        <el-alert title="测试账号: admin  测试密码: admin" type="warning" />
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { StorageKey } from '@/const/storage_key'
import { useUserStore } from '@/stores/user.store'
import { LocalST } from '@/utils/storage'
import { reactive } from 'vue'

const userStore = useUserStore()

// do not use same name with ref
const formData = reactive({
  username: '',
  password: '',
})

const handleLogin = () => {
  const { username, password } = formData
  userStore.handleLogin(username, password)
}
const handleTestLogin = () => {
  userStore.handleLogin('admin', 'admin')
}
</script>

<style lang="scss" scoped></style>
