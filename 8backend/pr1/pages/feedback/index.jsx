import { useState, Fragment } from "react";
import { buildGetPath, extractFeedBack } from "../api/feedback";

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();
  function loadFeedbackHandler(id) {
    fetch("/api/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log("object", data);
        setFeedbackData(data.selectedFeedback);
      });
  }
  return (
    <Fragment>
      <ul>
        {props.feedback.map((f) => (
          <li key={f.id}>
            {f.text}{" "}
            <button onClick={loadFeedbackHandler.bind(null, f.id)}>
              Show all data
            </button>
          </li>
        ))}
      </ul>
      {feedbackData && <p>email: {feedbackData.email}</p>}
    </Fragment>
  );
}

export default FeedbackPage;

export async function getStaticProps() {
  const filePath = await buildGetPath();
  const data = await extractFeedBack(filePath);
  return {
    props: {
      feedback: data,
    },
  };
}
