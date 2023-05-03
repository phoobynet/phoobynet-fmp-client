# Financial Modelling Prep Node API client

Very unofficial client for accessing the basic (non-pro/non-enterprise) services.

See [here](https://site.financialmodelingprep.com/developer/docs) for more information.

## Usage

```typescript
import { getCompanyProfile, setup } from '@phoobymet/fmp-client'

setup(process.env.FMP_API_KEY)

getComputedProfile('AAPL').then(companyProfile => {
  console.log(companyProfile)
})
```

## Usage with custom cache

TODO

```typescript

```

## TODO

- [ ] - Test!!!!!
- [ ] - Stock news
- [ ] - Historical prices
- [ ] - Market performance
  - [ ] - Sectors PE Ratio
  - [ ] - Industries PE Ratio
  - [ ] - Sectors Performance
  - [ ] - Most Gainer
  - [ ] - Most Loser
  - [ ] - Most Active
- [ ] - Caching - considering bringing weekly schedule along with some sort of TTL storage mechanism
- [ ] - Just in case you forgot, write some damn tests!
