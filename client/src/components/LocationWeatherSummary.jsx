import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

const LocationWeatherSummary = ({
  city,
  weatherCondition,
  todayTemperature,
}) => {
  const today = new Date();
  const dateParts = today.toDateString().split(" ");
  const dateoptions = { day: "numeric", month: "short", year: "numeric" };
  return (
    <div className="text-white locationweathersummary">
      {/* City Name */}

      <div className="flex space-x-1 mb-1">
        <MdLocationOn />
        <h1 className="text-sm">{city}</h1>
        <FaAngleRight />
      </div>

      {/* Weather Condition */}
      <h2 className="text-2xl/none mb-8 tracking-widest font-semibold">
        {weatherCondition}
      </h2>

      {/* Todays Temperature */}
      <p className="text-4xl/none font-semibold">{todayTemperature}°C</p>

      {/* Todays data */}
      <p className="text-xs/none">
        {today.toLocaleDateString("en-us", { weekday: "long" })}
        <span className="text-lg/none"> | </span>
        {`${dateParts[2]} ${dateParts[1]} ${dateParts[3]}`}
      </p>
    </div>
  );
};

export default LocationWeatherSummary;
