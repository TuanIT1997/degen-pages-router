export interface BaseParamsRequest {
  limit?: number;
  offset?: number;
  search?: number | string;
  order_by?: string;
  reverse?: boolean;
}

export interface BaseResponse<T> {
  error_code: string;
  data: T;
}

export interface BaseDataListResponse<T> {
  data: T[];
  total: number;
}
