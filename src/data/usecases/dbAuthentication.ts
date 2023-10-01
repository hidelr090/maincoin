import { Authentication } from "../../domain";
import { HashComparer } from "../protocols";
import { LoadApiKeyByUniqueIdentifierRepository } from "../protocols/db";

export class DbAuthentication implements Authentication {
  constructor(
    private readonly loadApiKeyByUniqueIdentifierRepository: LoadApiKeyByUniqueIdentifierRepository,
    private readonly hashComparer: HashComparer
  ){
  };

  async load (params: Authentication.Params): Promise<Authentication.Result>{
    
    let result = false;

    const apiKeyExists = await this.loadApiKeyByUniqueIdentifierRepository.loadByUniqueIdentifier(params.uniqueIdentifier);

    if(apiKeyExists) {
      const isValid  = await this.hashComparer.compare(params.apiKey, apiKeyExists.apiKey);
      if(isValid){
        result = true;
      }
    }

    return result;
  }
}