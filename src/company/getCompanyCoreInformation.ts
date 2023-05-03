import { getData } from '../client'
import { type CompanyCoreInformation } from './types'

const DEFAULT_WEEK_PATTERN = '1-5|0400'

/**
 * https://site.financialmodelingprep.com/developer/docs/#Company-core-information
 * @param {string} symbol
 * @param {string} [weekPattern] - caching pattern
 */
export const getCompanyCoreInformation = async (
  symbol: string,
  weekPattern = DEFAULT_WEEK_PATTERN,
): Promise<CompanyCoreInformation> =>
  await getData<CompanyCoreInformation>(
    `/v4/company-core-financials/${symbol}`,
    weekPattern,
  )
