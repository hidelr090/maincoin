export interface LoadCurrencyExchange {
  load: (currency: string) => Promise<LoadCurrencyExchange.Result>;
}

export namespace LoadCurrencyExchange {
  export type Result = {
    lowest: string,
    currentValue: string,
    marketValue: string
  } | null;
};