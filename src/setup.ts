import { setupClient } from './client'

let ready = false

/**
 * Set up the client with the api key.  This should only be called once.
 * @param {string} apiKey
 */
export const setup = (apiKey: string): void => {
  if (ready) {
    return
  }
  setupClient(apiKey)
  ready = true
}
