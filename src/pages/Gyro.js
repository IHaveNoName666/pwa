import { useState, useEffect } from "react";

const Gyro = () => {
    const [deviceAlpha, setDeviceAlpha] = useState();
    const [deviceBeta, setDeviceBeta] = useState();
    const [deviceGamma, setDeviceGamma] = useState();
    const [isIos, setIsIos] = useState(false);

    useEffect(() => {
        if(navigator?.userAgent.match(/Iphone/i)) {
            setIsIos(true)
        }
    }, []);


    useEffect(() => {
        window.addEventListener("deviceorientation", e => {
            setDeviceAlpha(e.alpha?.toFixed(1))
            setDeviceBeta(e.beta?.toFixed(1))
            setDeviceGamma(e.gamma?.toFixed(1))
        })
    }, []);


    const enableDeviceOrientation = () => {
        DeviceOrientationEvent.requestPermission().then(response => {
            if(response === "granted") {
                window.addEventListener("deviceorientation", e => {
                    setDeviceAlpha(e.alpha?.toFixed(1))
                    setDeviceBeta(e.beta?.toFixed(1))
                    setDeviceGamma(e.gamma?.toFixed(1))
                })
            }
        })
    }

    const vibrationFunction = () => {
        navigator?.vibrate([
            100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
          ]); // Vibrate 'SOS' in Morse.
    }

     
    return (
        <>
            <h1>Gyroskop:</h1>
            {isIos && <p>Du er på en iphone</p>}
            <h2>Værdier fra gyroskopet:</h2>
            <p>Alpha: {deviceAlpha}</p>
            <p>Beta: {deviceBeta}</p>
            <p>Gamma: {deviceGamma}</p>

            {isIos && !deviceAlpha ? <button onClick={enableDeviceOrientation}>Enable on iphone</button> : null}
            <button onClick={vibrationFunction}>click here to have sum fun #wink</button>          
        </>
     );
}

export default Gyro