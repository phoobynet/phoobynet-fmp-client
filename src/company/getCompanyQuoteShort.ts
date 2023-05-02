import { getData } from '../client'
import { type CompanyQuoteShort } from './types'
import { z } from 'zod'

export const getCompanyQuoteShort = async (
  symbol: string,
): Promise<CompanyQuoteShort[]> => {
  symbol = z.string().nonempty('symbol cannot be empty').parse(symbol)
  return await getData<CompanyQuoteShort[]>(`/v3/quote-short/${symbol}`)
}
