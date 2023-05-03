import { getData } from '../client'
import { type CompanyQuoteShort } from './types'
import { first } from 'lodash-es'

const DEFAULT_WEEK_PATTERN = '1-5|0900-0000|2'

/**
 * https://site.financialmodelingprep.com/developer/docs/realtime-stock-quote-api/
 * @param symbol
 * @param weekPattern
 */
export const getCompanyQuoteShort = async (
  symbol: string,
  weekPattern = DEFAULT_WEEK_PATTERN,
): Promise<CompanyQuoteShort | undefined> =>
  await getData<CompanyQuoteShort[]>(
    `/v3/quote-short/${symbol}`,
    weekPattern,
  ).then(first)
