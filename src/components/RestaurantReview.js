import React from "react";
import Rater from "react-rater";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "react-rater/lib/react-rater.css";

function MyVerticallyCenteredModal(props) {
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
        <Rater rating={0} total={5} />
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write your review for this restaurant</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

function RestaurantReview() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="info" onClick={() => setModalShow(true)} className="review-btn">
        Submit a new review!
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default RestaurantReview;
