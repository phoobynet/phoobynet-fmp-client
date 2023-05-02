import { getData } from '../client'
import { type CompanyExecutive } from './types'

export const getCompanyKeyExecutives = async (symbol: string): Promise<CompanyExecutive[]> => {
  return await getData<CompanyExecutive[]>('/v3/key-executives/' + symbol)
}
