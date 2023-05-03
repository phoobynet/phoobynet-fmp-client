import { type CacheResult } from './CacheResult'

export interface Cache {
  set: <T>(key: string, value: T) => Promise<void>
  get: <T>(key: string) => Promise<CacheResult<T> | null>
  remove: (key: string) => Promise<void>
}
