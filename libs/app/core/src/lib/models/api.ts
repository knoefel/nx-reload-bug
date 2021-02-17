import { AxiosError } from 'axios';

export interface ApiErrorState {
  errors: ApiError[];
  onError: (error: AxiosError) => void;
  removeError: (id: number) => void;
  reset: () => void;
}

export interface ApiError {
  id?: number;
  statusCode: number | undefined;
  error: string;
  message: string;
}
