import { Controller, HttpResponse } from "../protocols";
import { serverError, ok, noContent} from "../helpers";
import { LoadCurrencyExchange } from "../../domain";

export class LoadCurrencyExchangeController implements Controller {
  constructor (
    private readonly loadCurrencyExchange: LoadCurrencyExchange
  ){}

  async handle (request: LoadCurrencyExchangeController.Request): Promise<HttpResponse> {
    try {
      const currencyExchange = await this.loadCurrencyExchange.load(request.currency);

      return currencyExchange ? ok(currencyExchange) : noContent();
    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace LoadCurrencyExchangeController {
  export type Request = {
    currency: string;
  }
}