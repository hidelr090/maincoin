export interface UpdateUser {
  update: (uniqueIdentifier: string, apiKeyData: UpdateUser.Request) => Promise<UpdateUser.Result>;
}

export namespace UpdateUser {
  export type Result = boolean;

  export type Request = {
    name: string;
    passwordHash: string;
    description: string;
    uniqueIdentifier: string;
    createdAt?: Date;
    updatedAt?: Date;
    isActive: boolean;
    owner: string;
    useLimits: {
      requestsByMinute: number;
      requestsByDay: number;
    }
  };
};