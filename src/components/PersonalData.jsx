import React, { useContext, useEffect } from "react";
import { addPlace } from "../context/AddToList";

function PersonalData() {
  const email = JSON.parse(localStorage.getItem("user"));
  const { fetchUser, data } = useContext(addPlace);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

   const places = Object.entries(data || {}).filter(
    ([key, value]) => value.customer_reviews
  );

   if (places.length === 0) {
    return <h1 style={{ textAlign: "center" }}>Please add Trips!</h1>;
  }

  return (
    <div className="place-list">
      {places.map(([key, place]) => (
        <div
          key={key}
          className="place-card"
          style={{ border: "1px solid #ccc", padding: "16px", margin: "12px" }}
        >
          <h2>{place.title}</h2>
          <img
            src={place.image}
            alt={place.title}
            style={{ width: "300px", height: "200px", objectFit: "cover" }}
          />
          <p>{place.description}</p>
          <h4>First Review:</h4>
          <p>
            ⭐ {place.customer_reviews[0].stars} —{" "}
            {place.customer_reviews[0].comment}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PersonalData;
