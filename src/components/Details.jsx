import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { addPlace } from "../context/AddToList";
import { allDestination } from "../context/All_DestinationContext";

function Details() {
    const { data, fetchDestinations } = useContext(allDestination);
    const  {fetchUser, postUserData}  = useContext(addPlace);
    const { id } = useParams();
    const [spot, setSpot] = useState(null);
    const email = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        fetchDestinations(); // Fetch on component mount
    }, []);

    useEffect(() => {
        if (data && id) {
            const foundSpot = data.find((ele) => String(ele.id) === String(id));
            setSpot(foundSpot);
            // console.log(foundSpot.customer_reviews)
        };
        fetchUser()

    }, [data, id]);

    if (!spot) {
        return <div>Loading...</div>;
    }

    function add(){
        postUserData(spot);
        alert("Add Successfully !")
    }




    return (
        <>

            <div className="d-container">
                <h1 style={{ textAlign: 'center', margin: '10px' }}>{spot.title}</h1>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-around', padding: '20px' }}>
                    <div style={{ width: '40%', borderRadius: '15px', overflow: 'hidden' }}>
                        <img src={spot.image} alt={spot.id} style={{ width: '100%' }} />
                    </div>
                    <div style={{ padding: '10px', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ width: '90%', margin: '10px', padding: '10px' }}><strong>Description : </strong> {spot.description}  </p>
                        <p style={{ width: '90%', margin: '10px', padding: '10px' }}><strong> Point Of Interest : </strong> {spot.interest}  </p>
                        <p style={{ width: '90%', margin: '10px', padding: '10px' }}><strong> Ticket Price : </strong> {spot.ticket_price.entry_fee}  </p>

                        <h4 style={{ fontFamily: 'TimesNewRoman', textAlign: 'center' }}>Hotel Prices</h4> <br />
                        <div style={{ border: '2px solid black', width: '95%', margin: 'auto', borderRadius: '10px', display: 'flex', gap: '10px', padding: '20px', alignItems: 'center', justifyContent: 'center' }}>

                            <h4 style={{ fontFamily: 'TimesNewRoman' }}> <strong style={{ fontFamily: 'TimesNewRoman' }}>Budget Friendly : </strong>{spot.near_hotel_price.budget} |</h4>
                            <h4 style={{ fontFamily: 'TimesNewRoman' }}> <strong style={{ fontFamily: 'TimesNewRoman' }}>Mid Range : </strong>{spot.near_hotel_price.mid_range} |</h4>
                            <h4 style={{ fontFamily: 'TimesNewRoman' }}> <strong style={{ fontFamily: 'TimesNewRoman' }}>Luxury : </strong>{spot.near_hotel_price.luxury}</h4>


                        </div>
                        { email &&   <button style={{width: '25vw', margin: '12px'}} onClick={add}>ADD To List</button>}

                    </div>

                </div>



            </div>

            <div className="customer-r">
                <h1 style={{ textAlign: 'center', fontFamily: 'TimesNewRoman' }}>  Customer Reviews</h1>

                <div className="r-con">
                  {spot.customer_reviews && spot.customer_reviews.map((ele) => (
                    <div key={ele.name} style={{border: '1px solid gray', padding: '10px', borderRadius: '10px' }}>
                        <p> <strong>Name : </strong> {ele.name}</p> 
                        <p> <strong>Stars : <samp style={{ color: '#FFCC00'}}>★</samp></strong> {ele.stars}</p> 
                        <p> <strong>Comment : </strong> {ele.comment}</p> 
                        <p> <strong>Post On : </strong> {ele.date}</p> 

                    </div>
                  ) )}
                </div>

            </div>
        </>
    );
}

export default Details;
