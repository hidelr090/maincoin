import { db } from "../../config/mongodb";

import { currencySchema } from "../schemas";

export const CurrencyModel = db.model('currency', currencySchema);
