import React, { useState } from 'react';
import sunny from '../assets/sunny-day.jpg'
import mist from '../assets/forest.jpg';
import snowy from '../assets/snowy.jpeg';
import rainy from '../assets/rainy.jpg';
import lighting from '../assets/lightingstorm.jpeg';
import cloudy from '../assets/sky-clouds-4k-ja.jpg';
import { useEffect } from 'react';
import { getWeatherData } from './weather';


function App() {
  const [city, setCity] = useState('paris');
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('imperial');
  const [backgroundImg, setbackgroundImg] = useState(sunny);

  


  useEffect(() => {
    const fetchedData = async () => {
      const data = await getWeatherData(city, units);
      setWeather(data);

      if (
        data.description === 'few clouds' ||
        data.description === 'clear sky' || data.description === 'scattered clouds'
      ) {
        setbackgroundImg(sunny);
      }

      if (
        data.description === 'overcast clouds' ||
        data.description === 'broken clouds'
      ) {
        setbackgroundImg(cloudy);
      }

      if (data.description === 'shower rain' || data.description === 'rain' || data.description === 'moderate rain' || data.description === "heavy intensity rain" || data.description === 'light rain' ) {
        setbackgroundImg(rainy);
      }

      if (data.description === 'thunderstorm') {
        setbackgroundImg(lighting);
      }

      if (data.description === 'snow') {
        setbackgroundImg(snowy);
      }

      if (data.description === 'mist') {
        
        setbackgroundImg(mist)
               }
    };
    fetchedData();
  }, [units, city]);

  const handleUnits = (e) => {
    const button = e.currentTarget;
    const currUnit = button.innerText.slice(1);

    const cel = currUnit === 'C';
    button.innerText = cel ? '°F' : '°C';
    setUnits(cel ? 'metric' : 'imperial');
  };

  const enterInp = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      console.log(e.currentTarget.value);
      e.currentTarget.blur();
      e.currentTarget.value = ''
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="app" style={backgroundStyle}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className='section sec__inp'>
              <input
                onKeyDown={enterInp}
                type="text"
                name="city"
                placeholder="entercity"
              />
              <button className='button' onClick={(e) => handleUnits(e)}> °C</button>
            </div>
            <div className={`section sec__temp ${weather.temp > 20 ? 'isHot' : 'isCold'}`}>
              <div className="icon">
                <h3>{` ${weather.name}, ${weather.country} `}</h3>
                <img src={weather.iconUrl} alt="weatherIcon" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${
                  units === 'metric' ? 'C' : 'F'
                }`}</h1>
              </div>
              
            </div>
            <div className='max'>
                <small className='small'>max</small>
                <h1 className='h1M'>{`${weather.temp_max.toFixed()} °${
                  units === 'metric' ? 'C' : 'F' }`}</h1>
              </div>
              <div className='min'>
                <small className='small'>min</small>
                <h1 className='h1m'>{`${weather.temp_min.toFixed()} °${
                  units === 'metric' ? 'C' : 'F' }`}</h1>
              </div>
              <div className='wind'>
                <small className='small'>wind</small>
                <h1 className='h1w'>{`${weather.speed.toFixed()} ${
                  units === 'metric' ? 'm/s' : 'm/h' }`}</h1>
              </div>
           
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
