import { Authorizer } from "casbin.js";

interface Role {
  id: number;
  name: string;
  description?: string;
  permissionActionKeys: string[];
}
interface Roles {
  roles: Role[];
}

const getUserPermission = (info: Roles) => {
  const permissionActionKeys = info.roles.map((r) => r.permissionActionKeys);
  const keys = permissionActionKeys.concat.apply([], permissionActionKeys);
};

export const getAuthorizer = (roles: Roles) => {
  const permission = {
    access: getUserPermission(roles),
  };
  const authorizer = new Authorizer("manual");
  authorizer.setPermission(permission);
  return authorizer;
};
