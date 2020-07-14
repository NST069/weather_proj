import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

function SearchBar({setCity, getWeather}){

    return(
      <Container maxWidth="sm">
        <form>
            <TextField 
                id="setCity" 
                label="City" 
                variant="outlined" 
                size="small"
                onChange={(event)=>setCity(event.target.value)} />
            <Button 
                variant="outlined"
                onClick={(event)=>{
                    event.preventDefault();
                    getWeather(event)}
                }>Get Weather</Button>
            
        </form>
      </Container>
        
    );
}

export default SearchBar;