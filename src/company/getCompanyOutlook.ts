import { getData } from '../client'
import { type CompanyOutlook } from './types'

const DEFAULT_WEEK_PATTERN = '1-5|0400'
/**
 * https://site.financialmodelingprep.com/developer/docs/company-outlook-api/
 * @param {string} symbol
 * @param {string} weekPattern - caching pattern
 */
export const getCompanyOutlook = async (
  symbol: string,
  weekPattern = DEFAULT_WEEK_PATTERN,
): Promise<CompanyOutlook> =>
  await getData<CompanyOutlook>(`/v4/company-outlook/${symbol}`, weekPattern)
