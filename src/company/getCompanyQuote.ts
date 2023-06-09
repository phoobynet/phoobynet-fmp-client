import { getData } from '../client'
import { type CompanyQuote } from './types'
import { first } from 'lodash-es'

const DEFAULT_WEEK_PATTERN = '1-5|0900-0000|2'

/**
 * https://site.financialmodelingprep.com/developer/docs/stock-api/
 * @param {string} symbol
 * @param {string} [weekPattern] - caching pattern
 */
export const getCompanyQuote = async (
  symbol: string,
  weekPattern = DEFAULT_WEEK_PATTERN,
): Promise<CompanyQuote | undefined> =>
  await getData<CompanyQuote[]>(`/v3/quote/${symbol}`, weekPattern).then(first)
