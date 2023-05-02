import { getData } from '../client'
import { z } from 'zod'
import { type CompanyProfile } from './types'

export const getCompanyProfile = async (symbol: string): Promise<CompanyProfile[] | null> => {
  symbol = z.string().nonempty('symbol cannot be empty').parse(symbol)
  return await getData<CompanyProfile[]>('/v3/profile/' + symbol) ?? []
}
