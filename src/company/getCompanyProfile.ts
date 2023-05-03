import { getData } from '../client'
import { type CompanyProfile } from './types'
import { z } from 'zod'

const DEFAULT_WEEK_PATTERN = '1-5|0400'

/**
 * https://site.financialmodelingprep.com/developer/docs/companies-key-stats-free-api/
 * @param {string} symbol
 * @param {string} [weekPattern] - caching pattern
 */
export const getCompanyProfile = async (
  symbol: string,
  weekPattern = DEFAULT_WEEK_PATTERN,
): Promise<CompanyProfile[] | null> =>
  (await getData<CompanyProfile[]>(
    `/v3/profile/${z
      .string()
      .nonempty('symbol cannot be empty')
      .parse(symbol)}`,
    weekPattern,
  )) ?? []
