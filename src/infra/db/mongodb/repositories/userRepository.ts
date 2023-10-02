import { UserModel } from "../models";
import { UpdateApiKeyRepository } from "../../../../data";

export class MongoUpdateApiKeyRepository implements UpdateApiKeyRepository {
  async update (identifier: string,  apiKeyData: UpdateApiKeyRepository.Request): Promise<void> {
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