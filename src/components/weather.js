const key = 

const makeIcon = ''

const getWeatherData = async (city, units = 'metric') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`

    const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);
  

const {weather, main: {temp, temp_min, temp_max},
wind: {speed},
sys: {country},
name,  } = data

const {description, icon} = weather[0]

return {
description, icon, temp, temp_min, temp_max, speed, country, name
}
};

export { getWeatherData }