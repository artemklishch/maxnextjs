import { useState } from "react";
import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const [email, setEmail] = useState("");
  function registrationHandler(event) {
    event.preventDefault();
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API

    // fetch("/api/newslettersignup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email: email }),
    // });

    fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setEmail("");
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
