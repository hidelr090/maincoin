import { db } from "../../config/mongodb";

import { userSchema } from "../schemas";

export const UserModel = db.model('user', userSchema);
