import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import WeatherCard from './Components/WeatherCard';
import SearchBar from './Components/SearchBar';

function App() {
  const endpoint = "http://localhost:5000";

  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    console.log(weatherInfo);
  }, [weatherInfo]);

  const getWeather = async(event)=>{
    event.preventDefault();
    setLoading(true);
    let data;
    axios.get(`${endpoint}/getWeather`,{params:{city:city}})
      .then((res)=>{
        data = res.data;
        setWeatherInfo(data);
        setLoading(false);
      });
  }
  return (
    <div className="App">
      <SearchBar
        setCity={setCity}
        getWeather={getWeather}
      />
      <WeatherCard
        weatherInfo = {weatherInfo}
        loading={loading}
      />
    </div>
  );
}

export default App;
