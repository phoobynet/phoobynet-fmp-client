import { getData } from '../client'
import { type CompanySymbol } from './types'

const DEFAULT_WEEK_PATTERN = '1|0400'
/**
 * https://site.financialmodelingprep.com/developer/docs/stock-market-quote-free-api/
 * @param {string} weekPattern - caching pattern
 */
export const getCompanySymbols = async (
  weekPattern = DEFAULT_WEEK_PATTERN,
): Promise<CompanySymbol[]> =>
  await getData<CompanySymbol[]>('/v3/stocks/list', weekPattern)
