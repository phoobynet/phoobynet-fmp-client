// Cache interface
export interface Cache {
  set: <T>(key: string, value: T) => void
  get: <T>(key: string) => CacheResult<T>
}

export interface CacheResult<T> {
  key: string
  value: T | undefined
  timestamp: number
}
