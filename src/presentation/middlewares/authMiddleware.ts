import { HttpResponse, Middleware } from "../protocols";
import { forbidden, ok, serverError } from "../helpers";
import { AccessDeniedError } from "../errors";
import { Authentication } from "../../domain";

export class AuthMiddleware implements Middleware {
  constructor(
    private readonly authentication: Authentication,

  ){}

  async handle(httpRequest: any): Promise<HttpResponse> {
    try{
      const { apiKey, uniqueIdentifier } = httpRequest;

      if(apiKey && uniqueIdentifier){
        const isValidApiKey = await this.authentication.load({uniqueIdentifier, apiKey});
        if(isValidApiKey){
          return ok({'accesGranted': isValidApiKey });
        }
      }
      return forbidden(new AccessDeniedError());
    }catch(error){
      const err : Error = error as Error;
      return serverError(err);
    }
  }
}