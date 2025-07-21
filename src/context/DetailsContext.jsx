import React, { useState } from "react";
import { createContext } from "react";

export const placeDetail = createContext()

function DetailsContext({children}){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null);
    const [id, setId] = useState("");

    


    async function fetchDetail(){
        console.log("I am d", id)
        setLoading(true)
       try {
         let response = await fetch(`https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/travel/destinations.json`);
         let data = await response.json();

         let d = data.filter((ele) => ele.id == id);
         console.log(d)

         setLoading(false); setData(data)
 
        //  console.log(data)
       } catch (error) {

        setLoading(false); setData(null); setError(true)
        
       }
    }


    return(
        <>
        <placeDetail.Provider value={{ fetchDetail, loading, error, data, setId }}>
            {children}
        </placeDetail.Provider>
        
        </>
    )
}


export default DetailsContext;