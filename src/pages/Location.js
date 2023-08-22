import { useState, useEffect } from "react";

 
const Location = () => {
    const [myPos, setMyPos] = useState();

    useEffect(() => {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setMyPos(position)
                console.log(position)
            })
        }
    }, []);

    return (
        <>
            <h1>Location page</h1>

            <p>Latitude: {myPos?.coords.latitude}</p>
            <p>Longitude: {myPos?.coords.longitude}</p>
            <p>Altitude: {myPos?.coords.altitude}</p>
            <p>speed: {myPos?.coords.speed}</p>
            <p>Accuracy: {myPos?.coords.accuracy}</p>


        </>
     );
}

export default Location;