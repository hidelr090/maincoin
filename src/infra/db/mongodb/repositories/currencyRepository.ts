import { CurrencyModel } from "../models";
import { LoadCurrencyExchangeRepository, UpdateCurrenciesRepository } from "../../../../data/protocols";
import { LoadCurrencyExchange } from "../../../../domain";

export class MongoCurrencyRepository implements UpdateCurrenciesRepository, LoadCurrencyExchangeRepository {
  async update(currencies: string[], currenciesData: any): Promise<void> {
    try {
      for (const currencyObject of currenciesData) {
        if (currencyObject.code && currencyObject.codein) {
          const currencyKey = currencyObject.code + currencyObject.codein;
          if (currencies.includes(currencyKey)) {
            const currencyData = {
              ...currencyObject,
              identifier: currencyKey
            };
            const filter = { "identifier": currencyKey };
            const update = { $set: currencyData };
            const options = { upsert: true };
            await CurrencyModel.updateMany(filter, update, options);
          } else {
            const identifier = currencyObject.code + currencyObject.codein;
            
            const newCurrencyDoc = {
              identifier: identifier,
              ...currencyObject
            };
  
            await CurrencyModel.create(newCurrencyDoc);
          }
        }
      }
    } catch (err) {
      throw err;
    }
  }

  async load(currency: string): Promise<LoadCurrencyExchange.Result> {
    const currencyExchange = await CurrencyModel.findOne({ identifier: currency }); // Use findOne em vez de find
  
    if (!currencyExchange) {
      return null;
    }
  
    return {
      lowest: currencyExchange.low || '',
      currentValue: currencyExchange.bid || '',
      marketValue: currencyExchange.ask || '',
    };
  }
  
}
