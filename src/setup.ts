import { type Cache, InMemoryCache } from './cache'
import { setupClient } from './client'

let ready = false

/**
 * Set up the client with the api key.  This should only be called once.
 * @param {string} apiKey
 * @param {Cache} cache - used to cache results.  Defaults to an in-memory cache.
 */
export const setup = (
  apiKey: string,
  cache: Cache = new InMemoryCache(),
): void => {
  if (ready) {
    return
  }
  setupClient(apiKey, cache)
  ready = true
}
