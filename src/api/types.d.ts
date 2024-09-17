export type ApiData<T> = {
  success: boolean;
  data: T;
  error: boolean | null;
  message: string;
  status: boolean;
  statusCode: number;
};
