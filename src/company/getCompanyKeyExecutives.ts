import { getData } from '../client'
import { type CompanyExecutive } from './types'

const DEFAULT_WEEK_PATTERN = '1-5|0400'

/**
 * https://site.financialmodelingprep.com/developer/docs/key-executives-api/
 * @param {string} symbol
 * @param {string} [weekPattern] - caching pattern
 */
export const getCompanyKeyExecutives = async (
  symbol: string,
  weekPattern = DEFAULT_WEEK_PATTERN,
): Promise<CompanyExecutive[]> =>
  await getData<CompanyExecutive[]>(`/v3/key-executives/${symbol}`, weekPattern)
