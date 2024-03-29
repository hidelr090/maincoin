import { HttpResponse } from "./index";

export interface Controller < T = any > {
  handle: (request: T) => Promise<HttpResponse>;
}