import React from 'react';

function SearchString({setCity, getWeather}){

    return(
        <form>
            <input type="text" onChange={(event)=>setCity(event.target.value)}/>
            <button onClick={(event)=>{
                event.preventDefault();
                getWeather(event)}
            }>get</button>
        </form>
    );
}

export default SearchString;