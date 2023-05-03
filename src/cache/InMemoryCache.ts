import type { Cache } from './Cache'
import type { CacheResult } from './CacheResult'

export class InMemoryCache implements Cache {
  private readonly cache: Map<string, CacheResult<string>> = new Map<
    string,
    CacheResult<string>
  >()

  async set<T>(key: string, value: T): Promise<void> {
    this.cache.set(key, {
      key,
      data: JSON.stringify(value),
      timestamp: Date.now(),
    })
  }

  async get<T>(key: string): Promise<CacheResult<T> | null> {
    if (this.cache.has(key)) {
      const cacheResult = this.cache.get(key) as CacheResult<string>

      if (cacheResult.data != null) {
        return {
          key,
          data: JSON.parse(cacheResult.data) as T,
          timestamp: cacheResult.timestamp,
        }
      }
    }

    return null
  }

  async remove(key: string): Promise<void> {
    this.cache.delete(key)
  }
}
