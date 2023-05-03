import type { Cache } from './cache'
import { Week } from '@phoobynet/is-stale'
import axios, { type AxiosInstance } from 'axios'
import { z } from 'zod'

let client: AxiosInstance | null = null
let responseCache: Cache | null = null

export const setupClient = (apiKey: string, cache: Cache): void => {
  if (client !== null) {
    return
  }

  responseCache = cache

  apiKey = z.string().nonempty('apiKey cannot be empty').parse(apiKey)

  client = axios.create({
    baseURL: 'https://financialmodelingprep.com/api/',
  })

  client.interceptors.request.use(config => {
    config.params = {
      ...config.params,
      apikey: apiKey,
    }
    return config
  })
}

export const getData = async <T>(
  url: string,
  weekPattern: string = '',
): Promise<T> => {
  if (client === null) {
    throw new Error('client not set up.  Please call setup() first.')
  }

  if (weekPattern !== '') {
    const cacheResult = await responseCache!.get<T>(url)

    if (cacheResult) {
      const week = Week.parseRelativeToNow(weekPattern)

      if (week.isStale(new Date(cacheResult.timestamp))) {
        await responseCache!.remove(url)
      } else if (cacheResult.data) {
        return cacheResult.data as T
      }
    }
  }

  const data = await client.get<T>(url, {}).then(r => r.data)

  if (weekPattern !== '' && data) {
    await responseCache!.set(url, data)
  }

  return data
}
