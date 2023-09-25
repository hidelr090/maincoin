export interface UpdateCurrencies {
  update: (currencies: string) => Promise<UpdateCurrencies.Result>;
}

export namespace UpdateCurrencies {
  export type Result = boolean;
};