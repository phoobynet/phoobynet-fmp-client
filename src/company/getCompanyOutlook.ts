import { type CompanyOutlook } from './types'
import { getData } from '../client'

export const getCompanyOutlook = async (symbol: string): Promise<CompanyOutlook> => {
  return await getData<CompanyOutlook>(`/v4/company-outlook/${symbol}`)
}
