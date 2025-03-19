export enum ApiResponseStatusEnum {
  SUCCESS = "success",
  FAILED = "failed",
}

export interface BaseResponse {
  code: number;
  status: ApiResponseStatusEnum;
}
