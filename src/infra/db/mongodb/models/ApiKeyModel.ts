import { db } from "../../config/mongodb";

import { apiKeySchema } from "../schemas";

export const ApiKeyModel = db.model('apiKey', apiKeySchema);
