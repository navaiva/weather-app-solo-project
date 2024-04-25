import React from "react";
import sunny from '../assets/sunny.jpeg';
import windy from '../assets/windy.jpeg';
import snowy from '../assets/snowy.jpeg';
import rainy from '../assets/rainy.jpg';
import lighting from '../assets/lightingstorm.jpeg';
import cloudy from '../assets/sky-clouds-4k-ja.jpg';
import { useEffect } from "react";
import { getWeatherData } from "./weather";







function App() {
    
        useEffect(() => {
        const fetchedData = async () => {
            const data = await getWeatherData('paris')
       
        };
        fetchedData()
    }, []);


        const backgroundStyle = {
            backgroundImage: `url(${snowy})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          };
        return (
            
            <div className="app" style={backgroundStyle}>
                {/* <img className='image' src={cloudy} alt=""></img> */}
               <div className='overlay'>
                <div className="container">
                    <div className="section sec__inp">
                        <input type="text" name="city"
                        placeholder="entercity"/>
                        <button>°F</button>
                    </div>
                    <div className='section sec__temp'>
                        <div className="icon">
                            <h3>london</h3>
                            <img src="" alt="weather icon" />
                            <h3>sunny</h3>
                        </div>
                        <div className="temperature">
                            <h1> 34°F</h1>
                        </div>
                    </div>
                    {/* eeeeeeeeee */}
                </div>
               </div>

            </div>
        )
}

export default App;