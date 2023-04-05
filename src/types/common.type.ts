export interface AppError {
  message: string;
  status?: number;
}
export interface AppResponse<T extends object> {
  success: boolean;
  data?: T;
  error?: AppError;
}
