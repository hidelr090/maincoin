import { DbUpdateCurrencies } from "../../../data";
import { UpdateCurrencies } from "../../../domain";
import { MongoCurrencyRepository } from "../../../infra/db";
import { ConvertCurrencyApi } from "../../../infra/http";

export const makeDbUpdateCurrencies = () : UpdateCurrencies => {
  const updateCurrenciesRepository = new MongoCurrencyRepository();
  const convertCurrencyApi = new ConvertCurrencyApi();
  return new DbUpdateCurrencies(updateCurrenciesRepository,convertCurrencyApi);
}