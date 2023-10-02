import { Authentication } from "../../domain";
import { HashComparer, Encrypter} from "../protocols";
import { LoadApiKeyByUniqueIdentifierRepository, UpdateAccessTokenRepository} from "../protocols/db";

export class DbAuthentication implements Authentication {
  constructor(
    private readonly loadApiKeyByUniqueIdentifierRepository: LoadApiKeyByUniqueIdentifierRepository,
    private readonly hashComparer: HashComparer,
    private readonly encryption: Encrypter,
    private readonly updateAccessTokenRepository: UpdateAccessTokenRepository
  ){
  };

  async authenticate (params: Authentication.Params): Promise<Authentication.Result>{
    let result = null;
    const userExists = await this.loadApiKeyByUniqueIdentifierRepository.loadByUniqueIdentifier(params.uniqueIdentifier);

    if(userExists) {
      const { tokenExpiration, id } = userExists;

      const isValid  = await this.hashComparer.compare(params.password, userExists.passwordHash);

      if(isValid){
        const accessToken = await this.encryption.encrypt(userExists.id);

        const updateAccessTokenParams: UpdateAccessTokenRepository.Params = { id, token: accessToken };
        
        if(tokenExpiration) 
          updateAccessTokenParams.tokenExpiration = tokenExpiration;
        else{
          const expirationDate = new Date();
          expirationDate.setFullYear(expirationDate.getFullYear() + 1);
          updateAccessTokenParams.tokenExpiration = expirationDate;
        }

        await this.updateAccessTokenRepository.updateAccessToken(updateAccessTokenParams);
        result = {
          token: accessToken, 
          tokenExpiration, 
          id
        }
      }
    }
    return result;
  }
}