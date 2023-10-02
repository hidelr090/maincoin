import { Authentication } from "../../../../../domain";
export interface LoadUserByUniqueIdentifierRepository {
  loadByUniqueIdentifier: (identifier: string) => Promise<LoadUserByUniqueIdentifierRepository.Result>;
}

export namespace LoadUserByUniqueIdentifierRepository {
  export type Result = {
    token: string,
    tokenExpiration: Date,
    id: string,
    passwordHash: string
  };
}