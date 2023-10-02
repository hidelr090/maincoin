export interface UpdateAccessTokenRepository {
  updateAccessToken: (params: UpdateAccessTokenRepository.Params) => Promise<void>
}

export namespace UpdateAccessTokenRepository {
  export type Params = {
    id: string;
    token: string;
    tokenExpiration?: Date;
  }
}