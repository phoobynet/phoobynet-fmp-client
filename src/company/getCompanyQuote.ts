import { getData } from '../client'
import { type CompanyQuote } from './types'
import { z } from 'zod'

export const getCompanyQuote = async (
  symbol: string,
): Promise<CompanyQuote[]> => {
  symbol = z.string().nonempty('symbol cannot be empty').parse(symbol)
  return (await getData<CompanyQuote[]>(`/v3/quote/${symbol}`)) ?? []
}
