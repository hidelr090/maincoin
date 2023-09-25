import api from "../config/api";
import { ConvertCurrency } from "../../../../domain";

export class ConvertCurrencyApi implements ConvertCurrency {
  constructor(
  ){}

  async convert (currenciesArray: string): Promise<any>{
    const result = await api.get(`/last/${currenciesArray}`);

    return result.data;
  }
}

