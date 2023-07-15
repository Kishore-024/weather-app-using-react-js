import React, { useState } from "react";
import Axios from "axios";
import './App.css';


const KEY="7cd2a1d82a8721c453fbcef061d5246d"

const App=()=>{
  const[city,setCity]=useState("");
  const [data,setData]=useState();
  const fetchdata=async()=>{
    try{
      const response= await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
      setData(response.data)
      console.log(response.data);
      

    }
    catch (err){
      alert('error in api calling')
      

      

    }
    
  }
  return(
    <div className="App">

      <div className="title">weather App</div>
      <div className="input-conatiner"> 
      <input
      type="text"
      className="input"
      value={city}
      onChange={e=>{setCity(e.target.value)}}
      placeholder="enter the city name"/>
      
      <button className='fetch'onClick={fetchdata}>
        Fetch data
      </button>
      </div>
      <div>

      </div>
      {data && (
        <div className="container">
          <h1>{data.name} ,{data.sys.country}</h1>
          <div>Lat-{data.coord.lat}</div>
          <div>Log-{data.coord.lon}</div>
          <div className="temp"><h1>Temp {Math.round(data.main.temp)}^C</h1></div>
        </div>
      )}
      
    </div>
    

  )
}

export default App;
