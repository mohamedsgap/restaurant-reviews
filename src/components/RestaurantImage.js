import React, { useState, useEffect } from "react";
import axios from "axios";

const GKEY = process.env.REACT_APP_HELPER_KEY;

function RestaurantImage(props) {
  const imgRef = props.imageRef;
  const [imgURL, setImgURL] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${imgRef}&key=${GKEY}`
      )
      .then(res => {
        setImgURL(res.request.responseURL);
        //console.log(res.request.responseURL);
      })
      .catch(err => {
        console.log("ERROR HAS OCURED" + err);
      });
  }, []);
  return <img className="box-image" src={imgURL} alt="restaurant-pic" />;
}

export default RestaurantImage;
