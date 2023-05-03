import { getData } from '../client'
import { type CompanyQuote } from './types'
import { z } from 'zod'

const DEFAULT_WEEK_PATTERN = '1-5|0900-0000|2'

/**
 * https://site.financialmodelingprep.com/developer/docs/stock-api/
 * @param {string[]} symbols
 * @param {string} [weekPattern] - caching pattern
 */
export const getCompanyQuotes = async (
  symbols: string[],
  weekPattern = DEFAULT_WEEK_PATTERN,
): Promise<CompanyQuote[]> => {
  symbols = z
    .string()
    .array()
    .nonempty('symbols cannot be empty')
    .parse(symbols)
  return (
    (await getData<CompanyQuote[]>(
      `/v3/quote/${symbols.join(',')}`,
      weekPattern,
    )) ?? []
  )
}
