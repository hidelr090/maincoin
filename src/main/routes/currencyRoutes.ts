import { adaptRoute } from "../adapters/expressRouteAdapter";
import { makeUpdateCurrenciesController, makeLoadCurrencyExchangeController} from "../factories";
import { Router } from "express";

export default (router: Router) => {
  router.put('/updateCurrencies', adaptRoute(makeUpdateCurrenciesController()));
  router.get('/loadCurrencyExchange', adaptRoute(makeLoadCurrencyExchangeController()));
};