import { getData } from '../client'
import { type CompanyStockPriceChange } from './types'

const DEFAULT_WEEK_PATTERN = '1-5|0900-0000|60'

/**
 *
 * @param {string[]} symbols
 * @param {string} [weekPattern] - caching pattern
 */
export const getStockPriceChange = async (
  symbols: string[],
  weekPattern = DEFAULT_WEEK_PATTERN,
): Promise<CompanyStockPriceChange[]> =>
  await getData<CompanyStockPriceChange[]>(
    `/v3/stock-price-change/${symbols.join(',')}`,
    weekPattern,
  )
