import { atom } from "jotai";
import { AxiosRequestConfig } from "axios";

const axiosConfigAtom = atom<AxiosRequestConfig>({
  baseURL: import.meta.env.VITE_APP_BASE_URL_API,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
