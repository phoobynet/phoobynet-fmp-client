import { getData } from '../client'
import { type CompanySymbol } from './types/CompanySymbol'

export const getCompanySymbols = async (): Promise<CompanySymbol[]> => {
  return await getData<CompanySymbol[]>('/v3/stocks/list')
}
