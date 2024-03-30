import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    notification?: {
      text: string;
    };
  }
}
