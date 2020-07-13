const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const WeatherRouter = require('./weatherRouter');
app.use('/getWeather', WeatherRouter);

app.listen(PORT, ()=>{
    console.log(`Listening port ${PORT}`);
});