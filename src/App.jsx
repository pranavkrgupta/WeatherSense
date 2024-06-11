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
        <WeeklyForecast />
      </div>
    </div>
  );
}

export default App;
