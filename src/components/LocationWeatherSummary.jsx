import React from "react";

const LocationWeatherSummary = ({
  city,
  weatherCondition,
  todayTemperature,
  todayDate,
}) => {
  return (
    <div className="card locationweathersummary">
      <h1>{city}</h1>
      <h2>{weatherCondition}</h2>
      <p>{todayTemperature}°C</p>
      <p>{todayDate}</p>
    </div>
  );
};

export default LocationWeatherSummary;
