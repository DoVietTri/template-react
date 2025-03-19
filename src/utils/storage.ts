import Cookies from "js-cookie";

interface CookieAttributes {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
}

export const setCookie = (
  key: string,
  value: string | number,
  attributes?: CookieAttributes
) => {
  Cookies.set(key, value.toString(), attributes);
};

export const getCookie = (key: string) => Cookies.get(key) || "";
