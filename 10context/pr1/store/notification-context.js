import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
  notification: null, // { title, name, status }
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});
export default NotificationContext;

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();
  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(showNotificationHandler, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);
  const showNotificationHandler = (notificationData) => {
    setActiveNotification(notificationData);
  };
  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}
