import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import Content from './Components/Content';

function App() {
  const endpoint = "http://localhost:5000";

  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(()=>{
    console.log(weatherInfo);
  }, [weatherInfo]);

  const getWeather = async(event)=>{
    event.preventDefault();
    let data;
    axios.get(`${endpoint}/getWeather`,{params:{city:"London"}})
      .then((res)=>{
        data = res.data;
        setWeatherInfo(data);
      });
  }
  return (
    <div className="App">
      <Content
        getWeather={getWeather}
        setWeatherInfo={setWeatherInfo}
        weatherInfo = {weatherInfo}
      />
    </div>
  );
}

export default App;
