import { getData } from '../client'
import { z } from 'zod'
import { type CompanyProfile } from './companyProfile'

export const getCompanyProfile = async (symbol: string): Promise<CompanyProfile | null> => {
  symbol = z.string().nonempty('symbol cannot be empty').parse(symbol)
  const companyProfiles = await getData<CompanyProfile[]>('/v3/profile/' + symbol)

  if (companyProfiles?.length !== 0) {
    return companyProfiles[0]
  }
  return null
}