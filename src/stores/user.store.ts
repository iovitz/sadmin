import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { login } from '@/request'
import { useRouter } from 'vue-router'
import { LocalST } from '@/utils/storage'
import { StorageKey } from '@/const/storage_key'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const userInfo = reactive({
    nickname: '',
    token: '',
  })
  const handleLogin = async (username: string, password: string) => {
    const res = await login(username, password)
    if (res.length > 0) {
      // 登录成功
      const user = res[0]
      userInfo.nickname = user.nickname
      LocalST.set(StorageKey.token, user.token)
      router.replace('/pages')
    }
  }

  return { userInfo, handleLogin }
})
