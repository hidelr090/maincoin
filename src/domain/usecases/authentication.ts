export interface Authentication {
  load: (params: Authentication.Params) => Promise<Authentication.Result>
}

export namespace Authentication {
  export type Params = {
    uniqueIdentifier: string,
    apiKey: string
  }

  export type Result = boolean;
}