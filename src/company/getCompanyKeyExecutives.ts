import { getData } from '../client'
import { type CompanyExecutive } from './types'
import { z } from 'zod'

export const getCompanyKeyExecutives = async (symbol: string): Promise<CompanyExecutive[]> => {
  symbol = z.string().nonempty('symbol cannot be empty').parse(symbol)
  return await getData<CompanyExecutive[]>('/v3/key-executives/' + symbol)
}
