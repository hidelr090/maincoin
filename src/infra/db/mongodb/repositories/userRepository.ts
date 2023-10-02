import { UserModel } from "../models";
import { UpdateUserRepository } from "../../../../data";

export class MongoUpdateApiKeyRepository implements UpdateUserRepository {
  async update (identifier: string,  apiKeyData: UpdateUserRepository.Request): Promise<void> {
    try {
      const filter = { identifier };
      const update = { $set: apiKeyData };
      const options = { upsert: true };
      await UserModel.updateOne(filter, update, options);
    }catch(err) {
      throw err;
    }
  }
}