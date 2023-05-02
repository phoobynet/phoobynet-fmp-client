import { getData } from '../client'
import { type CompanyStockPriceChange } from './types'
import { z } from 'zod'

export const getStockPriceChange = async (
  symbols: string[],
): Promise<CompanyStockPriceChange[]> => {
  symbols = z
    .string()
    .array()
    .nonempty('symbols cannot be empty')
    .parse(symbols)
  return await getData<CompanyStockPriceChange[]>(
    `/v3/stock-price-change/${symbols.join(',')}`,
  )
}
