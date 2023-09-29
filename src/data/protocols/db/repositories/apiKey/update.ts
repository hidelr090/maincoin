import { UpdateApiKey } from "../../../../../domain";

export interface UpdateApiKeyRepository {
  update: (identifier: string,  apiKeyData: UpdateApiKeyRepository.Request) => Promise<void>;
}

export namespace UpdateApiKeyRepository {
  export type Request = UpdateApiKey.Request;
}