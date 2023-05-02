import { getData } from '../client'
import { type CompanyMarketCap } from './types'

export const getCompanyMarketCap = async (symbol: string): Promise<CompanyMarketCap | null> => {
  const marketCaps = await getData<CompanyMarketCap[]>('/v3/market-capitalization/' + symbol)

  if (marketCaps?.length !== 0) {
    return marketCaps[0]
  }

  return null
}
