import { commonRequest } from '@/utils/request/request'

export function login(username: string, password: string) {
  return commonRequest.get<
    Array<{
      nickname: string
      token: string
    }>
  >('/user', {
    username,
    password,
  })
}
