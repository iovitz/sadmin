import { Storage } from './storage'

export const LocalST = new Storage(localStorage)
export const SessionST = new Storage(sessionStorage)
