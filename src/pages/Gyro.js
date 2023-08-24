
import { useState, useEffect } from "react";



const Gyro = () => {
    const [deviceAlpha, setDeviceAlpha] = useState();
    const [deviceBeta, setDeviceBeta] = useState();
    const [deviceGamma, setDeviceGamma] = useState();



    useEffect(() => {
            window.addEventListener("deviceorientation", e => {
                setDeviceAlpha(e.alpha.toFixed(1))
                setDeviceBeta(e.beta.toFixed(1))
                setDeviceGamma(e.gamma.toFixed(1))
            })
        }, []);

    return ( 
        <>
        <h1>Gyroskop</h1>

        <h2>Værdier fra gyroskopet:</h2>

    <p>alpha: {deviceAlpha}</p>
    <p>beta: {deviceBeta}</p>
    <p>gamma: {deviceGamma}</p>
        
        </>
     );
}
 
export default Gyro;