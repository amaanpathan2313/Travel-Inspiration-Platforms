import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { allDestination } from "../context/All_DestinationContext";

function Gallery() {
    const [obj, setObj] = useState({
        museums: [],
        historical_landmarks: [],
        archaeological_sites: [],
        heritage: [],
        traditional_festivals: [],
        hiking: [],
        mountain_climbing: [],
        scuba_diving: [],
        surfing: [],
        skydiving: [],
    });

    const { fetchDestinations, loading, error, data } = useContext(allDestination);

    useEffect(() => {
        fetchDestinations();
    }, []);

    // Update obj when data is fetched
    useEffect(() => {
        if (data) {
            setObj({
                museums: data.filter(ele => ele.interest === "Museums & galleries"),
                historical_landmarks: data.filter(ele => ele.interest === "Historical landmarks"),
                archaeological_sites: data.filter(ele => ele.interest === "Archaeological sites"),
                heritage: data.filter(ele => ele.interest === "Heritage architecture"),
                traditional_festivals: data.filter(ele => ele.interest === "Traditional festivals"),
                hiking: data.filter(ele => ele.interest === "Hiking"),
                mountain_climbing: data.filter(ele => ele.interest === "Mountain climbing"),
                scuba_diving: data.filter(ele => ele.interest === "Scuba diving"),
                surfing: data.filter(ele => ele.interest === "Surfing"),
                skydiving: data.filter(ele => ele.interest === "Skydiving"),
            });
        }
    }, [data]);

    if (loading) {
        return <h1>Loading....</h1>;
    }

    if (error) {
        return <h1>Something went wrong....</h1>;
    }

   
    return (
        <div>
            <h1 style={{ textAlign: 'center', margin : '15px',}}>Our Gallery</h1>

           <h1 style={{ padding: '10px', margin: '10px' }}>Museums & galleries</h1>
              <div className="g-container">
                {obj.museums && obj.museums.map((ele) => (
                    <div key={ele.title} className="g-card">
                        <img src={ele.image} alt="" />
                        <div style={{ padding: '10px', }}>
                            <h4 style={{ fontFamily: 'timesNewRoman',  margin: '10px' }}>Title : {ele.title} </h4>
                            <p  style={{ fontFamily: 'timesNewRoman', margin: '10px' }}>  <strong style={{ fontFamily: 'timesNewRoman'}} className="truncate">Description : </strong>  {ele.description}</p>
                        <Link to={`/details/${ele.id}`}>View More</Link>
                        </div>
                    </div>
                ))}
            </div> 




           <h1 style={{ padding: '10px', margin: '10px' }}>Heritage architecture</h1>
            <div className="g-container">
                {obj.heritage && obj.heritage.map((ele) => (
                    <div key={ele.title} className="g-card">
                        <img src={ele.image} alt="" />
                        <div style={{ padding: '10px', }}>
                            <h4 style={{ fontFamily: 'timesNewRoman',  margin: '10px' }}>Title : {ele.title} </h4>
                            <p  style={{ fontFamily: 'timesNewRoman', margin: '10px' }}>  <strong style={{ fontFamily: 'timesNewRoman'}}>Description : </strong>  {ele.description}</p>
                            <Link to={`/details/${ele.id}`}>View More</Link>
                        </div>
                    </div>
                ))}
            </div>


           <h1 style={{ padding: '10px', margin: '10px' }}>Archaeological sites</h1>
            <div className="g-container">
                {obj.archaeological_sites && obj.archaeological_sites.map((ele) => (
                    <div key={ele.title} className="g-card">
                        <img src={ele.image} alt="" />
                        <div style={{ padding: '10px', }}>
                            <h4 style={{ fontFamily: 'timesNewRoman',  margin: '10px' }}>Title : {ele.title} </h4>
                            <p  style={{ fontFamily: 'timesNewRoman', margin: '10px' }}>  <strong style={{ fontFamily: 'timesNewRoman'}}>Description : </strong>  {ele.description}</p>
                            <Link to={`/details/${ele.id}`}>View More</Link>
                        </div>
                    </div>
                ))}
            </div>


           <h1 style={{ padding: '10px', margin: '10px' }}> historical_landmarks</h1>
            <div className="g-container">
                {obj. historical_landmarks && obj. historical_landmarks.map((ele) => (
                    <div key={ele.title} className="g-card">
                        <img src={ele.image} alt="" />
                        <div style={{ padding: '10px', }}>
                            <h4 style={{ fontFamily: 'timesNewRoman',  margin: '10px' }}>Title : {ele.title} </h4>
                            <p  style={{ fontFamily: 'timesNewRoman', margin: '10px' }}>  <strong style={{ fontFamily: 'timesNewRoman'}}>Description : </strong>  {ele.description}</p>
                            <Link to={`/details/${ele.id}`}>View More</Link>
                        </div>
                    </div>
                ))}
            </div>


           <h1 style={{ padding: '10px', margin: '10px' }}> traditional_festivals</h1>
            <div className="g-container">
                {obj.traditional_festivals && obj.traditional_festivals.map((ele) => (
                    <div key={ele.title} className="g-card">
                        <img src={ele.image} alt="" />
                        <div style={{ padding: '10px', }}>
                            <h4 style={{ fontFamily: 'timesNewRoman',  margin: '10px' }}>Title : {ele.title} </h4>
                            <p  style={{ fontFamily: 'timesNewRoman', margin: '10px' }}>  <strong style={{ fontFamily: 'timesNewRoman'}}>Description : </strong>  {ele.description}</p>
                            <Link to={`/details/${ele.id}`}>View More</Link>
                        </div>
                    </div>
                ))}
            </div>


           <h1 style={{ padding: '10px', margin: '10px' }}> hiking</h1>
            <div className="g-container">
                {obj.hiking && obj.hiking.map((ele) => (
                    <div key={ele.title} className="g-card">
                        <img src={ele.image} alt="" />
                        <div style={{ padding: '10px', }}>
                            <h4 style={{ fontFamily: 'timesNewRoman',  margin: '10px' }}>Title : {ele.title} </h4>
                            <p  style={{ fontFamily: 'timesNewRoman', margin: '10px' }}>  <strong style={{ fontFamily: 'timesNewRoman'}}>Description : </strong>  {ele.description}</p>
                            <Link to={`/details/${ele.id}`}>View More</Link>
                        </div>
                    </div>
                ))}
            </div>

           <h1 style={{ padding: '10px', margin: '10px' }}> mountain_climbing</h1>
            <div className="g-container">
                {obj.mountain_climbing && obj.mountain_climbing.map((ele) => (
                    <div key={ele.title} className="g-card">
                        <img src={ele.image} alt="" />
                        <div style={{ padding: '10px', }}>
                            <h4 style={{ fontFamily: 'timesNewRoman',  margin: '10px' }}>Title : {ele.title} </h4>
                            <p  style={{ fontFamily: 'timesNewRoman', margin: '10px' }}>  <strong style={{ fontFamily: 'timesNewRoman'}}>Description : </strong>  {ele.description}</p>
                            <Link to={`/details/${ele.id}`}>View More</Link>
                        </div>
                    </div>
                ))}
            </div>


           <h1 style={{ padding: '10px', margin: '10px' }}> scuba_diving</h1>
            <div className="g-container">
                {obj.scuba_diving && obj.scuba_diving.map((ele) => (
                    <div key={ele.title} className="g-card">
                        <img src={ele.image} alt="" />
                        <div style={{ padding: '10px', }}>
                            <h4 style={{ fontFamily: 'timesNewRoman',  margin: '10px' }}>Title : {ele.title} </h4>
                            <p  style={{ fontFamily: 'timesNewRoman', margin: '10px' }}>  <strong style={{ fontFamily: 'timesNewRoman'}}>Description : </strong>  {ele.description}</p>
                            <Link to={`/details/${ele.id}`}>View More</Link>
                        </div>
                    </div>
                ))}
            </div>

           <h1 style={{ padding: '10px', margin: '10px' }}> surfing</h1>
            <div className="g-container">
                {obj.surfing && obj.surfing.map((ele) => (
                    <div key={ele.title} className="g-card">
                        <img src={ele.image} alt="" />
                        <div style={{ padding: '10px', }}>
                            <h4 style={{ fontFamily: 'timesNewRoman',  margin: '10px' }}>Title : {ele.title} </h4>
                            <p  style={{ fontFamily: 'timesNewRoman', margin: '10px' }}>  <strong style={{ fontFamily: 'timesNewRoman'}}>Description : </strong>  {ele.description}</p>
                            <Link to={`/details/${ele.id}`}>View More</Link>
                        </div>
                    </div>
                ))}
            </div>
        
           <h1 style={{ padding: '10px', margin: '10px' }}> skydiving</h1>
            <div className="g-container">
                {obj.skydiving && obj.skydiving.map((ele) => (
                    <div key={ele.title} className="g-card">
                        <img src={ele.image} alt="" />
                        <div style={{ padding: '10px', }}>
                            <h4 style={{ fontFamily: 'timesNewRoman',  margin: '10px' }}>Title : {ele.title} </h4>
                            <p  style={{ fontFamily: 'timesNewRoman', margin: '10px' }}>  <strong style={{ fontFamily: 'timesNewRoman'}}>Description : </strong>  {ele.description}</p>
                            <Link to={`/details/${ele.id}`}>View More</Link>
                        </div>
                    </div>
                ))}
            </div>
        


        </div>
    );
}

export default Gallery;
