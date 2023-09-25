import { LoadCurrencyExchange } from "../../../../../domain";

export interface LoadCurrencyExchangeRepository {
  load: (currency: string) => Promise<LoadCurrencyExchangeRepository.Result>;
}

export namespace LoadCurrencyExchangeRepository {
  export type Result = LoadCurrencyExchange.Result;
};
