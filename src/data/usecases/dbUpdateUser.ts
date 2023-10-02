import { UpdateUser } from "../../domain";
import { Hasher, UpdateUserRepository } from "../protocols";

export class DbUpdateApiKey implements UpdateUser {
  constructor(
    private readonly updateApiKeyRepository: UpdateUserRepository,
    private readonly hasher: Hasher
  ){}

  async update (identifier: string, apiKeyData: UpdateUser.Request) :Promise<UpdateUser.Result>{
    
    let result = false;
    
    if(identifier && apiKeyData){
      const hashedKey = await this.hasher.hash(apiKeyData.passwordHash);
      apiKeyData.passwordHash = hashedKey;
      await this.updateApiKeyRepository.update(identifier, apiKeyData);
      result = true;
    }

    return result;
  }
}