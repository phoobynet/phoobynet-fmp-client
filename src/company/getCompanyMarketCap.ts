import { getData } from '../client'
import { type CompanyMarketCap } from './types'
import { first } from 'lodash-es'

const DEFAULT_WEEK_PATTERN =
  '1-5|0800,0900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100'

/**
 * https://site.financialmodelingprep.com/developer/docs/market-capitalization-api/
 * @param {string} symbol
 * @param {string} [weekPattern] - caching pattern
 */
export const getCompanyMarketCap = async (
  symbol: string,
  weekPattern = DEFAULT_WEEK_PATTERN,
): Promise<CompanyMarketCap | undefined> =>
  await getData<CompanyMarketCap[]>(
    `/v3/market-capitalization/${symbol}`,
    weekPattern,
  ).then(first)
