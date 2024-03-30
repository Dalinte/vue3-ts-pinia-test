import { showNotificationModel } from '@features/showNotification';
import { HttpClient } from '@shared/api';

export const notificationInterceptors = HttpClient.interceptors.response.use(
  showNotificationModel.addFulfilledResponseNotification,
  showNotificationModel.addRejectedResponseNotification,
);
