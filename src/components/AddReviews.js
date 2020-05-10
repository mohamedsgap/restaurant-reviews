import React, { useState } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./AddReviews.css";

function AddReviews() {
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState("");
  const [fullReview, setFullReview] = useState([]);

  function getStars(event) {
    setStars(Number(event.target.value));
  }

  function getReview(event) {
    setReview(event.target.value);
  }

  function addReview() {
    setFullReview(fullReview =>
      fullReview.concat({
        text: review,
        star: stars,
        id: Math.random() * 100
      })
    );
    setReview("");
    setStars(0);
  }
  
  return (
    <React.Fragment>
      <div className="review">
        {fullReview.map(({ id, text, star }) => (
          <ul key={id}>
            <li>
              <Rater rating={Number(star)} total={5} interactive={false} />
            </li>
            <li>
              <span>Feedback: {text}</span>
            </li>
          </ul>
        ))}

        <select onChange={getStars} className="select-stars" value={stars}>
          <option value="0">✰✰✰✰✰</option>
          <option value="1">⭐✰✰✰✰</option>
          <option value="2">⭐⭐✰✰✰</option>
          <option value="3">⭐⭐⭐✰✰</option>
          <option value="4">⭐⭐⭐⭐✰</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
        <input
          type="text"
          onChange={getReview}
          className="input-text"
          placeholder="leave a review"
          value={review}
        />
        <button onClick={addReview} className="submit-review">
          {" "}
          Submit a review
        </button>
      </div>
    </React.Fragment>
  );
}

export default AddReviews;
