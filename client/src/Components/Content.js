import React from 'react';

function Content({weatherInfo}){
    return(
        <div>
            {weatherInfo
            ? <div><p>{weatherInfo.location.name +", "+ weatherInfo.location.country}</p>
              <p>{weatherInfo.location.lat +" "+ weatherInfo.location.lon}</p>
              <p>{weatherInfo.current.temperature +" C"}</p>
              <img src={weatherInfo.current.weather_icons} alt={weatherInfo.current.weather_code}/></div>
            : null}
        </div>
    );
}

export default Content;