import { getData } from '../client'
import { type CompanyMarketCap } from './types'
import { z } from 'zod'

export const getCompanyMarketCap = async (symbol: string): Promise<CompanyMarketCap[]> => {
  symbol = z.string().nonempty('symbol cannot be empty').parse(symbol)
  return await getData<CompanyMarketCap[]>('/v3/market-capitalization/' + symbol) ?? []
}
