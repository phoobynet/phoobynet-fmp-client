import { getData } from '../client'
import { type CompanyQuote } from './types'

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
  return (
    (await getData<CompanyQuote[]>(
      `/v3/quote/${symbols.join(',')}`,
      weekPattern,
    )) ?? []
  )
}
