import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('');
  const [cityDetails, setCityDetails] = useState({});
  const apiKey = '6da235946fcc3ce16a0b3f17c9008d58';

  
  async function handleSearch(){
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    let jsonData = await data.json();
    setCityDetails(jsonData);
  }

  return (
    <>
      <input type="text" name="search-bar" id="search-bar" onChange={(event)=>{setCity(event.target.value)}}/>
      <button onClick={handleSearch}>Search</button>
        <div className="heading">Weather</div>
      <div className="container">
        <div className="weather-description">
          <div className="temperature square">43</div>
          <div className="temperature-unit square"><span className="temperature-symbol">&deg;</span>C</div>
          <div className="weather-scene square"><img src="" alt=""/></div>
          <div className="other-description square">
            <div className="humidity">Humidity: 29%</div>
            <div className="wind-speed">Wind: 14 km/h</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
