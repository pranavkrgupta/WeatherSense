import React from "react";
import "./assets/styles/app.css";
import LocationWeatherSummary from "./components/LocationWeatherSummary";
import Menu from "./components/Menu";
import WeatherImage from "./components/WeatherImage";
import LocalActivities from "./components/LocalActivities";
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
        <Menu />
        <LocalActivities />
        <HourlyForecast />
        <WeeklyForecast weeklyForecasts={weeklyForecasts} />
      </div>
    </div>
  );
}

export default App;
