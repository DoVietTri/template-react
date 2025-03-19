import { jwtDecode } from "jwt-decode";
import { CustomJwtPayload } from "../interfaces/jwt";

export const handleDecodeJWT = (token: string) => {
  let result = null;
  if (token) {
    try {
      result = jwtDecode<CustomJwtPayload>(token);
    } catch (e) {
      console.error(e);
    }
  }
  return result;
};
