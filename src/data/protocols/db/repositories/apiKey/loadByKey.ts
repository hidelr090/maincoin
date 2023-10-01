export interface LoadApiKeyByKeyRepository {
  loadByKey: (key: string) => Promise<LoadApiKeyByKeyRepository.Result>;
}

export namespace LoadApiKeyByKeyRepository {
  export type Result = {
    id: string;
  }| null;
}