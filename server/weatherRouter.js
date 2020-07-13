const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');

const API_KEY = 'cef0d6fe5911dedeea325d14c6d4a435';
const API_URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=`;

router.get('/', async(req, res, next) => { //{city, state}    
    let api = API_URL + req.query.city;
    fetch(api)
        .then(async(response)=>{
            let data = await response.json();
            console.log(data);
            res.send(data); 
        });
});

module.exports = router;