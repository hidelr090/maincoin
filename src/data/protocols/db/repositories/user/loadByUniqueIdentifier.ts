import { Authentication } from "../../../../../domain";
export interface LoadApiKeyByUniqueIdentifierRepository {
  loadByUniqueIdentifier: (identifier: string) => Promise<LoadApiKeyByUniqueIdentifierRepository.Result>;
}

export namespace LoadApiKeyByUniqueIdentifierRepository {
  export type Result = {
    token: string,
    tokenExpiration: Date,
    id: string,
    passwordHash: string
  };
}