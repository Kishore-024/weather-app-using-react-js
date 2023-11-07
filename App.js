import React, { useState } from 'react'
import axios from 'axios'
const KEY="7cd2a1d82a8721c453fbcef061d5246d"

const Weather = () => {
    const[city,setCity]=useState()
    const [weatherData, setWeatherData] = useState(null);
const change=(e)=>{
    setCity(e.target.value)
}
    
const handleChange=async()=>{
    try{
        const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
        )
        setWeatherData(response.data);}
    catch(error){
        


    }

}
  return (
    <div>
        <h1> Weather App</h1>
        <input
        type='text'
        placeholder='Enter the city name'
        value={city}
        onChange={change}
        />
        <button onClick={handleChange}>Fetch data</button>
        {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp /8}°C</p>
          <p>Climatic condition: {weatherData.weather[0].description}</p>
          <p>Wind speed: {weatherData.wind.speed}</p>
          <p> Latitude: {weatherData.coord.lat}</p>
          <p> Longitude: {weatherData.coord.lon}</p>
          </div>)}
      
    </div>
  )
}

export default Weather

