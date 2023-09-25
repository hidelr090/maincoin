import { UpdateCurrencies } from "../../domain/usecases";
import { UpdateCurrenciesRepository } from "../protocols";
import { ConvertCurrency } from "../../domain/currencyApi";

export class DbUpdateCurrencies implements UpdateCurrencies {
  constructor(
    private readonly updateCurrenciesRepository: UpdateCurrenciesRepository,
    private readonly convertCurrency: ConvertCurrency
  ){}

  async update (currencies: string) :Promise<UpdateCurrencies.Result>{
    
    const convertedCurrencies = await this.convertCurrency.convert(currencies);
    const currenciesArray  = currencies.split(',').map(item => item.replace("-", ""));
    const currenciesObjects = [];
    for(const currencyData in convertedCurrencies){
      currenciesObjects.push(convertedCurrencies[currencyData]);
    }

    let result = false;
    if(convertedCurrencies){
      await this.updateCurrenciesRepository.update(currenciesArray, currenciesObjects);
      result = true;
    }

    return result;
  }
}