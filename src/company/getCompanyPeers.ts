import { getData } from '../client'
import { type CompanyPeers } from './types'
import { first } from 'lodash-es'

/**
 * https://site.financialmodelingprep.com/developer/docs/stock-peers-api/
 * @param {string} symbol
 * @param {string} [weekPattern] - caching pattern
 */
export const getCompanyPeers = async (
  symbol: string,
  weekPattern = '1-5|0400',
): Promise<CompanyPeers | undefined> =>
  await getData<CompanyPeers[]>(
    `/v4/company/peers/${symbol}`,
    weekPattern,
  ).then(first)
