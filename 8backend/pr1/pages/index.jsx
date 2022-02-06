import { useRef, useState } from "react";

export default function HomePage() {
  const [feedback, setFeedback] = useState([]);
  const emailRef = useRef();
  const feedbackRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;
    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: enteredEmail, text: enteredFeedback }),
    });
  };
  const loadFeedbackHandler = () => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => {
        setFeedback(data.feedback);
      });
  };
  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email address</label>
          <input ref={emailRef} id="email" type="email" />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea ref={feedbackRef} id="feedback" rows="5"></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load feedback</button>
      <ul>
        {feedback.map((f) => (
          <li key={f.id}>
            email: {f.email}; feedback" {f.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
