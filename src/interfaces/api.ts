import type { Method } from "axios";

export interface Payload {
  method: Method;
  endpoint: string;
  headers?: object;
  baseURL?: string;
  params?: object;
  data?: object;
  uri?: string;
  auth?: boolean;
  extra?: string;
}
