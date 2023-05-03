import { getData } from '../client'
import { type CompanyProfile } from './types'
import { first } from 'lodash-es'

const DEFAULT_WEEK_PATTERN = '1-5|0400'

/**
 * https://site.financialmodelingprep.com/developer/docs/companies-key-stats-free-api/
 * @param {string} symbol
 * @param {string} [weekPattern] - caching pattern
 */
export const getCompanyProfile = async (
  symbol: string,
  weekPattern = DEFAULT_WEEK_PATTERN,
): Promise<CompanyProfile | undefined> =>
  await getData<CompanyProfile[]>(`/v3/profile/${symbol}`, weekPattern).then(
    first,
  )
