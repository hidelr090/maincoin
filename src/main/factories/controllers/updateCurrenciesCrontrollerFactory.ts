import { makeDbUpdateCurrencies } from '../../factories'
import { Controller } from '../../../presentation/protocols'
import { UpdateCurrenciesController } from '../../../presentation/controllers';

export const makeUpdateCurrenciesController = (): Controller => {
  return new UpdateCurrenciesController(makeDbUpdateCurrencies());
}