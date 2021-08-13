import { notification } from 'antd';

const notificationTs: any = notification;
const openNotification = (type: 'success' | 'info' | 'warning' | 'error', description: string) => {
  notificationTs[type]({
    message: 'Notification',
    description,
    duration: 2,
    className: 'custom-class',
    style: {
      borderRadius: '10px',
    },
  });
};

export default openNotification;
