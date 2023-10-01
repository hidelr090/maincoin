import { UpdateApiKey } from "../../domain";
import { Hasher, UpdateApiKeyRepository } from "../protocols";

export class DbUpdateApiKey implements UpdateApiKey {
  constructor(
    private readonly updateApiKeyRepository: UpdateApiKeyRepository,
    private readonly hasher: Hasher
  ){}

  async update (identifier: string, apiKeyData: UpdateApiKey.Request) :Promise<UpdateApiKey.Result>{
    
    let result = false;
    
    if(identifier && apiKeyData){
      const hashedKey = await this.hasher.hash(apiKeyData.apiKey);
      apiKeyData.apiKey = hashedKey;
      await this.updateApiKeyRepository.update(identifier, apiKeyData);
      result = true;
    }

    return result;
  }
}