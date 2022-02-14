import { useReducer, useState, useEffect } from "react";
import classes from "./contact-form.module.css";
import {
  initialState,
  reducerHandler,
  sendContactData,
  setNotification,
} from "./helpers";
import Notification from "../ui/notification";

const ContactForm = () => {
  const [formData, dispatch] = useReducer(reducerHandler, initialState);
  const [requerstStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();
  useEffect(() => {
    if (requerstStatus === "success" || requerstStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [requerstStatus]);
  async function sendMessageHandler(e) {
    e.preventDefault();
    setRequestStatus("pending");
    try {
      await sendContactData(formData);
      dispatch({ type: "RESET" });
      setRequestStatus("success");
    } catch (err) {
      setRequestError(err.message);
      setRequestStatus("error");
    }
  }
  const onChangeHandler = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };
  const notification = setNotification(requerstStatus, requestError);
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              onChange={onChangeHandler}
              name="EMAIL"
              value={formData.email}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              onChange={onChangeHandler}
              name="NAME"
              value={formData.name}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            onChange={onChangeHandler}
            name="MESSAGE"
            value={formData.message}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && <Notification notification={notification} />}
    </section>
  );
};

export default ContactForm;
