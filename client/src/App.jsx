import React from "react";
import "./assets/styles/app.css";
import LocationWeatherSummary from "./components/LocationWeatherSummary";
import WeatherImage from "./components/WeatherImage";
import WeeklyTemp from "./components/WeeklyTemp";
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast";

function App() {
  const WeatherData = {
    city: "Jamshedpur",
    weatherCondition: "Thunder",
    todayTemperature: 32,
  };

  const weeklyForecasts = [
    { day: "Mon", realfeel: 10, wind: 15, chancesofrain: 10, uvindex: 5 },
    { day: "Tue", realfeel: 30, wind: 20, chancesofrain: 20, uvindex: 6 },
    { day: "Wed", realfeel: 22, wind: 5, chancesofrain: 10, uvindex: 5 },
    { day: "Thu", realfeel: 16, wind: 10, chancesofrain: 20, uvindex: 6 },
    { day: "Fri", realfeel: 32, wind: 15, chancesofrain: 10, uvindex: 5 },
    // Add more forecast objects as needed
  ];

  const hourlyData = [
    {
      time: "12 AM",
      temperature: 31.5,
    },
    {
      time: "1 AM",
      temperature: 32,
    },
    {
      time: "2 AM",
      temperature: 33.3,
    },
    {
      time: "3 AM",
      temperature: 35,
    },
    {
      time: "4 AM",
      temperature: 37.4,
    },
    {
      time: "5 AM",
      temperature: 39.6,
    },
    {
      time: "6 AM",
      temperature: 39.5,
    },
    {
      time: "7 AM",
      temperature: 41.4,
    },
    {
      time: "8 AM",
      temperature: 42.5,
    },
    {
      time: "9 AM",
      temperature: 42.9,
    },
    {
      time: "10 AM",
      temperature: 41.8,
    },
    {
      time: "11 AM",
      temperature: 40.8,
    },
    {
      time: "12 PM",
      temperature: 41.4,
    },
    {
      time: "1 PM",
      temperature: 39.5,
    },
    {
      time: "2 PM",
      temperature: 38.3,
    },
    {
      time: "3 PM",
      temperature: 37.2,
    },
    {
      time: "4 PM",
      temperature: 36.5,
    },
    {
      time: "5 PM",
      temperature: 35.5,
    },
    {
      time: "6 PM",
      temperature: 33.3,
    },
    {
      time: "7 PM",
      temperature: 32.5,
    },
    {
      time: "8 PM",
      temperature: 32.4,
    },
    {
      time: "9 PM",
      temperature: 32.3,
    },
    {
      time: "10 PM",
      temperature: 32.2,
    },
    {
      time: "11 PM",
      temperature: 32.1,
    },
  ];

  return (
    <div className="app">
      <div className="grid-container">
        <LocationWeatherSummary
          city={WeatherData.city}
          weatherCondition={WeatherData.weatherCondition}
          todayTemperature={WeatherData.todayTemperature}
          todayDate={WeatherData.todayDate}
        />
        <WeatherImage />
        <WeeklyTemp />
        <HourlyForecast hourlyData={hourlyData} />
        <WeeklyForecast weeklyForecasts={weeklyForecasts} />
      </div>
    </div>
  );
}

export default App;
