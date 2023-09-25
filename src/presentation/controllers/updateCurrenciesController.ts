import { Controller, HttpResponse} from '../../presentation/protocols';
import { noContent, serverError } from '../../presentation/helpers';
import { UpdateCurrencies } from '../../domain/usecases';

export class UpdateCurrenciesController implements Controller {
  constructor (
    private readonly updateCurrencies: UpdateCurrencies
  ){}

  async handle(request: UpdateCurrenciesController.Request): Promise<HttpResponse>{
    try{

      await this.updateCurrencies.update(request.currencies);

      return noContent();

    }catch(err){
      console.error(err);
      return serverError(err as Error);
    }
  }
}

export namespace UpdateCurrenciesController {
  export type Request = {
    currencies: string;
  }
}