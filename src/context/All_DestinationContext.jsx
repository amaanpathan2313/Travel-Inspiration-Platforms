import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const allDestination = createContext();

function All_DestinationContext({ children }) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)

    async function fetchDestinations() {
        setLoading(true)
        try {
            let response = await fetch('https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/travel/destinations.json');
            let data = await response.json();
            // console.log(data)
            setLoading(false); setData(data)
        } catch (error) {
            setLoading(false); setData(null); setError(true)

        }
    }


    return (
        <allDestination.Provider value={{ fetchDestinations, loading, error, data }}>
            {children}
        </allDestination.Provider>
    )
}



export default All_DestinationContext;