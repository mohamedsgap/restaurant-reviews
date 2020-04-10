import React from 'react'
import './RestaurantsList.css'

function RestaurantsList(props) {    
        const restaurantsData = props.data;

        const restaurantList = restaurantsData.map(restaurant => {
             return(
                 <div key={restaurant.long} className="section">
                    <h3>{restaurant.restaurantName}</h3>
                    <span>{restaurant.address}</span>
                    <div>
                        {
                        restaurant.ratings.map(restRate => {
                            return (
                                <ul key={restRate.starts}>
                                <li>Rating: {restRate.stars} stars</li>
                                <li>Feedback: {restRate.comment}</li>
                                </ul>
                            )
                        })
                    }
                    </div>
                 </div>
             ) 
         })
         
    return (
        <div className="list">
            <h2><span role="img" aria-label="food emoji">🥞🍛</span> Restaurants List <span role="img" aria-label="food emoji">🍝🍲</span></h2>
            <div className="sublist">
               {restaurantList}
            </div>
        </div>
    )
}

export default RestaurantsList

