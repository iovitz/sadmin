<template>
  <div class="w-full h-full bg-slate-500 flex justify-center items-center">
    <el-card shadow="hover">
      <template #header>
        <div class="flex justify-between">
          <span>登录</span>
          <el-button class="button" text>账号密码登录</el-button>
        </div>
      </template>
      <el-form :model="form" label-width="60px">
        <el-form-item label="用户名">
          <el-input class="w-96" v-model="form.username" size="large" placeholder="Please input username" clearable />
        </el-form-item>
        <el-form-item label="密码">
          <el-input class="w-96" type="password" size="large" placeholder="Please input password" v-model="form.password" clearable />
        </el-form-item>
        <el-form-item>
          <el-button class="w-full" type="primary" @click="onSubmit">Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  username: '',
  password: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang="scss" scoped></style>
