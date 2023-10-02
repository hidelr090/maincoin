export interface Authentication {
  authenticate: (params: Authentication.Params) => Promise<Authentication.Result>
}

export namespace Authentication {
  export type Params = {
    uniqueIdentifier: string,
    password: string
  }
  export type Result = {
    token: string,
    tokenExpiration: Date,
    id: string,
  } | null;
}