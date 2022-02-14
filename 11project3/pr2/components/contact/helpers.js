export const initialState = {
  email: "",
  name: "",
  message: "",
};
export const reducerHandler = (state = initialState, action) => {
  switch (action.type) {
    case "EMAIL": {
      return { ...state, email: action.payload };
    }
    case "NAME": {
      return { ...state, name: action.payload };
    }
    case "MESSAGE": {
      return { ...state, message: action.payload };
    }
    case "RESET": {
      return initialState;
    }
    default:
      return state;
  }
};

export const sendContactData = async (formData) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  if (!response.OK) {
    throw new Error(data.message || "Something went wrong!");
  }
};

export const setNotification = (requerstStatus, requestError) => {
  let notification;
  if (requerstStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way.",
    };
  }
  if (requerstStatus === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: "Your message was successfully sent",
    };
  }
  if (requerstStatus === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: requestError || "Something went wrong",
    };
  }
  return notification;
};
