import axios from "axios";
import { Payload } from "../interfaces/api";

export async function request<ResponseDataType>({
  baseURL = import.meta.env.VITE_APP_BASE_URL_API,
  method = "GET",
  endpoint = "",
  params = {},
  data = {},
  uri = "",
  headers = {},
}: Payload): Promise<ResponseDataType> {
  return axios({
    headers,
    paramsSerializer: {
      indexes: null,
    },
    ...(uri ? { url: uri } : { baseURL, url: endpoint }),
    ...(method.toUpperCase() === "GET" ? { params } : { method, params, data }),
  });
}
