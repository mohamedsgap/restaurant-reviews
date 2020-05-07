import React, { useState } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./RestaurantBox.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ShowReviews.css";

function Reviews(props) {
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState("");

  function getStars(event) {
    setStars(Number(event.target.value));
  }
  function getReview(event) {
    setReview(event.target.value);
  }


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Submit a Review for this Restaurant!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Give a rate for this restaurant</Form.Label>
            <Form.Control as="select" onChange={getStars}>
              <option value="0">Grve a rate form 1 to 5 stars </option>
              <option value="1">⭐✰✰✰✰</option>
              <option value="2">⭐⭐✰✰✰</option>
              <option value="3">⭐⭐⭐✰✰</option>
              <option value="4">⭐⭐⭐⭐✰</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write your review for this restaurant</Form.Label>
            <Form.Control as="textarea" rows="2" onChange={getReview} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button >Submit</Button>
        <RenderReview stars={stars} review={review} />
      </Modal.Footer>
    </Modal>
  );
}

function ShowReviews() {
  return (
    <React.Fragment>
      <AddReviews />
      <RenderReview />
    </React.Fragment>
  );
}

function RenderReview(props) {
  return (
    <div className="rating">
      <ul>
        <li>
          {" "}
          <Rater rating={props.stars} total={5} interactive={false} />{" "}
        </li>
        <li>Feedback: {props.review}</li>
      </ul>
    </div>
  );
}

function AddReviews() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button
        variant="info"
        onClick={() => setModalShow(true)}
        className="review-btn"
      >
        Submit a new review!
      </Button>
      <Reviews show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ShowReviews;
