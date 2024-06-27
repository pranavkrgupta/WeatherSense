import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa6";
import TemperatureChart from "./TemperatureChart";

const HourlyForecast = ({ hourlyData }) => {
  useEffect(() => {
    const element = document.querySelector("#graphContainer");

    const handleScroll = (event) => {
      event.preventDefault();
      element.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
      });
    };

    if (element) {
      element.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <div className="card hourlyforecast text-white flex flex-col py-2 gap-2">
      {/* Heading */}
      <div className="flex items-center gap-2 px-6">
        <FaClock className="" />
        <h1 className="text-sm tracking-wider">24-hour forecast</h1>
      </div>

      {/* Graph */}
      <div
        id="graphContainer"
        style={{
          display: "inline-block",
          overflowX: "scroll",
          width: "100%",
        }}
        className="px-2"
      >
        <TemperatureChart data={hourlyData} />
      </div>
    </div>
  );
};

export default HourlyForecast;
