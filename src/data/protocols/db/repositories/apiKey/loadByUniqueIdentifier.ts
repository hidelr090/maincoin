export interface LoadApiKeyByUniqueIdentifierRepository {
  loadByUniqueIdentifier: (identifier: string) => Promise<LoadApiKeyByUniqueIdentifierRepository.Result>;
}

export namespace LoadApiKeyByUniqueIdentifierRepository {
  export type Result = {
    apiKey: string;
  } | null;
}