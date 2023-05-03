import { getData } from '../client'
import { type CompanyPeers } from './types'
import { z } from 'zod'

/**
 * https://site.financialmodelingprep.com/developer/docs/stock-peers-api/
 * @param {string} symbol
 * @param {string} [weekPattern] - caching pattern
 */
export const getCompanyPeers = async (
  symbol: string,
  weekPattern = '1-5|0400',
): Promise<CompanyPeers[]> =>
  (await getData<CompanyPeers[]>(
    `/v4/company/peers/${z
      .string()
      .nonempty('symbol cannot be empty')
      .parse(symbol)}`,
    weekPattern,
  )) ?? []
