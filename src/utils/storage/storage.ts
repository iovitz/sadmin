import type { StorageKey } from '@/const/storage_key'

export class Storage {
  constructor(private engine: globalThis.Storage) {}

  /**
   * 在storage中设置值
   * @param {string} key 需要设置的key
   * @param {string} val 需要设置的key
   */
  public set(key: StorageKey, val: string) {
    try {
      this.engine.setItem(key, val)
      return true
    } catch (e) {
      return false
    }
  }

  /**
   * 在storage中获取key对应的值
   * @param {string} key 需要获取的key
   */
  public get(key: StorageKey) {
    return localStorage.getItem(key)
  }

  /**
   * 移除指定的key
   * @param {string} key 需要移除的key
   */
  public remove(key: StorageKey) {
    localStorage.removeItem(key)
  }

  /**
   * 判断storage中是否存在对应的key
   * @param {string} key 需要查询的key
   * @return {boolean} 查询结果
   */
  public has(key: StorageKey): boolean {
    return this.get(key) !== null
  }
}
