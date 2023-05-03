export interface CacheResult<T> {
  key: string
  data: T | undefined
  timestamp: number
}
