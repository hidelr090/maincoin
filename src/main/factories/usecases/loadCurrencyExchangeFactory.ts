import { DbLoadCurrencyExchange } from "../../../data";
import { LoadCurrencyExchange } from "../../../domain";
import { MongoCurrencyRepository } from "../../../infra/db";

export const makeDbLoadCurrencyExchange = () : LoadCurrencyExchange => {
  const mongoCurrencyRepository = new MongoCurrencyRepository();
  return new DbLoadCurrencyExchange(mongoCurrencyRepository);
}