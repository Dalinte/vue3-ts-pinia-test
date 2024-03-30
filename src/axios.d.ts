import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    // Добавляем поле с настройками уведомлений, чтобы при отправке запроса можно было в interceptor вывести уведомление
    notification?: {
      text: string;
    };
  }
}
