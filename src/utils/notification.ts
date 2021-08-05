import { notification } from 'antd';

const notificationTs: any = notification;
const openNotification = (type: any, description: any) => {
  notificationTs[type]({
    message: 'Notification',
    description,
    duration: 3,
    // time to close notification
    className: 'custom-class',
    style: {
      borderRadius: '10px',
    },
  });
};

export default openNotification;
