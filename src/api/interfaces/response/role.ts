import { BaseResponse } from "./base";

export interface Role {
  id: number;
  name: string;
  description?: string;
  permissionActionKeys: string[];
}

export interface Roles {
  roles: Role[];
}

export interface ApiDataRoleResponse {
  data: BaseResponse & {
    data?: Roles;
  };
}
