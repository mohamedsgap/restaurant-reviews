import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./RestaurantBox.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Anything(props) {
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
            <Form.Control as="textarea" rows="2" />
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
      <Button
        variant="info"
        onClick={() => setModalShow(true)}
        className="review-btn"
      >
        Submit a new review!
      </Button>

      <Anything
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

function RestaurantBox(props) {
  const boxData = props.data;
  const boxPlaces = props.places;

  const restaurantBoxPlaces = boxPlaces.map(place => {
    //let imageURL = `${place.venue.categories[0].icon.prefix}${place.venue.categories[0].icon.suffix}`
    return (
      <div key={place.venue.id} className="section">
        <h3 className="restaurant-title">{place.venue.name}</h3>
        <h4>Address: {place.venue.location.address}</h4>
        <div className="rest-box">
          <img
            className="box-image"
            src={place.venue.photos.items}
            alt="restaurant-pic"
          />
        </div>
        <div className="review-btn">
          <RestaurantReview />
        </div>
      </div>
    );
  });

  const restaurantBoxData = boxData.map(restaurant => {
    return (
      <div key={restaurant.id} className="section">
        <h3 className="restaurant-title">{restaurant.restaurantName}</h3>
        <div className="rest-box">
          <img
            className="box-image"
            src={restaurant.image}
            alt="restaurant-pic"
          />

          <div className="rate-section">
            {restaurant.ratings.map(restRate => {
              return (
                <ul key={Math.random() * 100}>
                  <li>
                    {" "}
                    <Rater
                      rating={restRate.stars}
                      total={5}
                      interactive={false}
                    />{" "}
                  </li>
                  <li>Feedback: {restRate.comment}</li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="review-btn">
          <RestaurantReview />
        </div>
      </div>
    );
  });

  return (
    <div className="sublist">
      <div>{restaurantBoxData}</div>
      <div>{restaurantBoxPlaces}</div>
    </div>
  );
}

export default RestaurantBox;
