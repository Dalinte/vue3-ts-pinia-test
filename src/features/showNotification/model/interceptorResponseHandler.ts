import { AxiosResponse } from 'axios';
import { useToast } from 'vue-toastification';
import { postModel } from '@entities/post';

// Интерцептор для вывода уведомлений об успешный действиях
export const addFulfilledResponseNotification = (
  response: AxiosResponse,
): AxiosResponse => {
  if (response.config.notification) {
    const toast = useToast();
    toast.success(response.config.notification.text);
  }

  return response;
};

// Интерцептор для вывода уведомлений об ошибках
export const addRejectedResponseNotification = (
  error: unknown,
): Promise<never> => {
  const toast = useToast();
  toast.error(postModel.errorNotifications['error']);
  return Promise.reject(error);
};
