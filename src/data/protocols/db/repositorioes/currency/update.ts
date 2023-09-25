
export interface UpdateCurrenciesRepository {
  update: (currencies: Array<string>,  currenciesData: any) => Promise<void>;
}