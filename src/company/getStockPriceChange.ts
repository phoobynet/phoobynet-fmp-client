import { getData } from '../client'
import { type CompanyStockPriceChange } from './types'
import { z } from 'zod'

export const getStockPriceChange = async (
  symbol: string,
): Promise<CompanyStockPriceChange[]> => {
  symbol = z.string().nonempty('symbol cannot be empty').parse(symbol)
  return await getData<CompanyStockPriceChange[]>(
    `/v3/stock-price-change/${symbol}`,
  )
}
