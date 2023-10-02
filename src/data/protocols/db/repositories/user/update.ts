import { UpdateUser } from "../../../../../domain";

export interface UpdateUserRepository {
  update: (identifier: string,  apiKeyData: UpdateUserRepository.Request) => Promise<void>;
}

export namespace UpdateUserRepository {
  export type Request = UpdateUser.Request;
}