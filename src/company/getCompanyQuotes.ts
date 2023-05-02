import { getData } from '../client'
import { type CompanyQuote } from './types'
import { z } from 'zod'

export const getCompanyQuotes = async (
  symbols: string[],
): Promise<CompanyQuote[]> => {
  symbols = z
    .string()
    .array()
    .nonempty('symbols cannot be empty')
    .parse(symbols)
  return (await getData<CompanyQuote[]>(`/v3/quote/${symbols.join(',')}`)) ?? []
}
