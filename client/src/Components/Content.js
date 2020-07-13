import React from 'react';

function Content({getWeather, setWeatherInfo, weatherInfo}){
    let weather;
    return(
        <div>
            <button onClick={(event)=>{
                getWeather(event);
                }}>Click</button>
            {weather
            ? <p>{weatherInfo.location.Name +" "+ weatherInfo.location.country}</p>
            : null}
        </div>
    );
}

export default Content;