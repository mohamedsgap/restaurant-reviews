import React from 'react'
import './RestaurantBox.css'

function RestaurantBox(data) {

    const boxData = data.data

    const restaurantList = boxData.map(restaurant => {
        return (
          <div key={restaurant.id} className="section">
            <h3>{restaurant.restaurantName}</h3>
            <div>
              {restaurant.ratings.map(restRate => {
                return (
                  <ul key={Math.random() * 100}>
                    <li>Rating: {restRate.stars} stars</li>
                    <li>Feedback: {restRate.comment}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        );
      });

    return (
        <div className="sublist">
            {restaurantList}
        </div>
    )
}

export default RestaurantBox
