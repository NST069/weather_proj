import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import Content from './Components/Content';
import SearchString from './Components/SearchString';

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
    axios.get(`${endpoint}/getWeather`,{params:{city:city}})
      .then((res)=>{
        data = res.data;
        setWeatherInfo(data);
      });
  }
  return (
    <div className="App">
      <SearchString
        setCity={setCity}
        getWeather={getWeather}
      />
      <Content
        weatherInfo = {weatherInfo}
      />
    </div>
  );
}

export default App;
