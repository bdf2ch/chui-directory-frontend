export interface IResponse<T> {
  code: number;
  isSuccess: boolean;
  response: T;
}
