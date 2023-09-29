export interface UpdateApiKey {
  update: (uniqueIdentifier: string, apiKeyData: UpdateApiKey.Request) => Promise<UpdateApiKey.Result>;
}

export namespace UpdateApiKey {
  export type Result = boolean;

  export type Request = {
    name: string;
    apiKey: string;
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