import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { z } from 'zod'

let client: AxiosInstance | null = null

export const setupClient = (apiKey: string): void => {
  if (client !== null) {
    return
  }

  apiKey = z.string().nonempty('apiKey cannot be empty').parse(apiKey)

  client = axios.create({
    baseURL: 'https://financialmodelingprep.com/api/',
  })

  client.interceptors.request.use((config) => {
    config.params = {
      ...config.params,
      apikey: apiKey,
    }
    return config
  })
}

export const getData = async <T> (url: string, config: AxiosRequestConfig = {}): Promise<T> => {
  if (client === null) {
    throw new Error('client not set up.  Please call setup() first.')
  }

  return await client.get<T>(url, config).then(r => r.data)
}
