import { makeDbLoadCurrencyExchange } from '..'
import { Controller } from '../../../presentation/protocols'
import { LoadCurrencyExchangeController } from '../../../presentation/controllers';

export const makeLoadCurrencyExchangeController = (): Controller => {
  return new LoadCurrencyExchangeController(makeDbLoadCurrencyExchange());
}