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
      const { uniqueIdentifier, password } = httpRequest;

      if(password && uniqueIdentifier){
        const isValidApiKey = await this.authentication.authenticate({uniqueIdentifier, password});
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