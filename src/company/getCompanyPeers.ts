import { getData } from '../client'
import { z } from 'zod'
import { type CompanyPeers } from './types'

export const getCompanyPeers = async (symbol: string): Promise<CompanyPeers[]> => {
  symbol = z.string().nonempty('symbol cannot be empty').parse(symbol)
  return await getData<CompanyPeers[]>(`/v4/company/peers/${symbol}`) ?? []
}
