import { LoadCurrencyExchange } from "../../domain";
import { LoadCurrencyExchangeRepository } from "../protocols/db";

export class DbLoadCurrencyExchange implements LoadCurrencyExchange {
  constructor(
    private readonly loadCurrencyExchangeRepository: LoadCurrencyExchangeRepository
  ){
  };

  async load (currency: string): Promise<LoadCurrencyExchange.Result>{
    
    const currencyExchange = await this.loadCurrencyExchangeRepository.load(currency);
    
    return currencyExchange;
  }
}