require("dotenv").config();
const express = require("express");
const axios = require("axios");
const NodeCache = require("node-cache");

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Node-Cache with no default TTL, we will set it manually per item
const cache = new NodeCache();

// Base URL and APi key for OpenWeathermap
const Weather_API_url = "https://api.openweathermap.org/data/2.5/weather";
const Api_key = process.env.WEATHER_API_KEY;

app.use(express.json());

//endpoint to get weather data for a specific city
app.get("/weather/:city", async (req, res) => {
  const city = req.params.city.trim().toLowerCase();

  //check if data for this city is in the cache
  if (cache.has(city)) {
    console.log(`Serving cached data for ${city}`);
    return res.json(cache.get(city));
  }

  try {
    //Fetch data from the weather API
    console.log(`Fetching new data for ${city}`);
    const response = await axios.get(Weather_API_url, {
      params: {
        q: city,
        appid: Api_key,
        units: `metric`,
      },
    });

    const weatherData = response.data;

    //Store the data in the cache with a 12-hour expiration (43200 seconds);
    cache.set(city, weatherData, 43200);

    res.json(weatherData);
  } catch (error) {
    console.error(`Error fetching data for ${city}:`, error.message);
    res.status(500).json({ error: `Failed to fetch weather data` });
  }
});

//start the server

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
