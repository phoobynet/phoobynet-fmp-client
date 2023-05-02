import { type CompanyCoreInformation } from './types'
import { getData } from '../client'

export const getCompanyCoreInformation = async (symbol: string): Promise<CompanyCoreInformation> => {
  return await getData<CompanyCoreInformation>(`/v4/company-core-financials/${symbol}`)
}
