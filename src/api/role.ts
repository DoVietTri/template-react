import { apiRequest } from "../configs/api";
import { ApiDataRoleResponse } from "./interfaces/response/role";

const namespace = "/roles";

export const getSelfRoleList = async () => {
  const response = await apiRequest<ApiDataRoleResponse>({
    method: "GET",
    endpoint: `${namespace}/self`,
    auth: true,
  });

  return response.data.data;
};
