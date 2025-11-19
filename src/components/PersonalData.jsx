 import React, { useContext, useEffect } from "react";
import { addPlace } from "../context/AddToList";
import { FaStar, FaMapMarkerAlt, FaTrash, FaEdit, FaHeart } from "react-icons/fa";
import "./PersonalData.css"; // We'll create this CSS file

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
    return (
      <div className="empty-state">
        <div className="empty-icon">
          <FaMapMarkerAlt />
        </div>
        <h2>Your Bucket List is Empty</h2>
        <p>Start exploring and add your dream destinations!</p>
        <button className="explore-btn" onClick={() => window.location.href = "/"}>
          Explore Destinations
        </button>
      </div>
    );
  }

  return (
    <div className="personal-container">
      <div className="personal-header">
        <h1>My Travel Bucket List</h1>
        <p>Your dream destinations waiting to be explored</p>
        <div className="stats">
          <span className="stat-item">
            <strong>{places.length}</strong> Places
          </span>
          <span className="stat-item">
            <FaHeart className="heart-icon" /> Saved
          </span>
        </div>
      </div>

      <div className="places-grid">
        {places.map(([key, place]) => (
          <div key={key} className="place-card">
            <div className="card-image">
              <img src={place.image} alt={place.title} />
              <div className="card-overlay">
                <button className="icon-btn edit-btn">
                  <FaEdit />
                </button>
                <button className="icon-btn delete-btn">
                  <FaTrash />
                </button>
              </div>
              <div className="rating-badge">
                <FaStar className="star-icon" />
                <span>{place.customer_reviews[0]?.stars || 4.5}</span>
              </div>
            </div>
            
            <div className="card-content">
              <h3 className="place-title">{place.title}</h3>
              <p className="place-description">
                {place.description.length > 120 
                  ? `${place.description.substring(0, 120)}...` 
                  : place.description
                }
              </p>
              
              <div className="review-section">
                <div className="review-header">
                  <FaStar className="review-star" />
                  <span>Latest Review</span>
                </div>
                <p className="review-text">
                  "{place.customer_reviews[0]?.comment || 'No review yet'}"
                </p>
              </div>

               
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalData;