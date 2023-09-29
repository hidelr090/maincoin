import { UpdateApiKey } from "../../domain";
import { UpdateApiKeyRepository } from "../protocols";

export class DbUpdateApiKey implements UpdateApiKey {
  constructor(
    private readonly updateApiKeyRepository: UpdateApiKeyRepository,
  ){}

  async update (identifier: string, apiKeyData: UpdateApiKey.Request) :Promise<UpdateApiKey.Result>{
    
    let result = false;
    
    if(identifier && apiKeyData){
      await this.updateApiKeyRepository.update(identifier, apiKeyData);
      result = true;
    }

    return result;
  }
}