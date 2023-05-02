import { type CompanyInsideTrade } from './CompanyInsideTrade'
import { type CompanyExecutive } from './CompanyExecutive'
import { type CompanyProfile } from './CompanyProfile'
import { type CompanyStockNewsArticle } from './CompanyStockNewsArticle'
import { type CompanyIncome } from './CompanyIncome'
import { type CompanyBalance } from './CompanyBalance'
import { type CompanyCash } from './CompanyCash'

export interface CompanyOutlook {
  profile: CompanyProfile
  insideTrades: CompanyInsideTrade[]
  keyExecutives: CompanyExecutive[]
  stockNews: CompanyStockNewsArticle[]
  financialsAnnual: {
    income: CompanyIncome[]
    balance: CompanyBalance[]
    cash: CompanyCash[]
  }
  financialsQuarter: {
    income: CompanyIncome[]
    balance: CompanyBalance[]
    cash: CompanyCash[]
  }
}
