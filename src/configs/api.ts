import { Payload } from "../interfaces/api";
import { request } from "../utils/request";
import { getCookie } from "../utils/storage";

export async function apiRequest<ResponseDataType>(payload: Payload) {
  let { headers } = payload;
  const token = getCookie("token");
  if (payload.auth) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await request<ResponseDataType>({ ...payload, headers });
    return response;
  } catch (e) {
    throw e;
  }
}
