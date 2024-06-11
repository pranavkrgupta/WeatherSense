import { FaTemperatureFull } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { SiRainmeter } from "react-icons/si";
import { AiFillSun } from "react-icons/ai";

const AirConditionsElement = ({ icon, name, value }) => {
  return (
    <div className="">
      <div className="flex items-center">
        {icon}
        <p className="ml-2 text-sm">{name}</p>
      </div>
      <p className="ml-8 text-sm">{value}</p>
    </div>
  );
};

const WeeklyForecast = ({ weeklyForecasts }) => {
  const forecast = weeklyForecasts[0];
  return (
    <div className="card weeklyforecast flex flex-col justify-between text-white p-6">
      {/* Week Navbar: distribute items evenly across the container */}

      <div className="flex justify-between text-gray-400 mb-4">
        {weeklyForecasts.map((fc, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:text-white"
          >
            <p>{fc.day.toUpperCase()}</p>
            <FaCloudSun className="h-6 w-6" />
          </div>
        ))}
      </div>

      {/* Air Conditions: stack conditions vertically */}

      <div className="flex flex-col gap-4">
        <h1 className="text-sm font-bold mb-2">AIR CONDITIONS</h1>

        <AirConditionsElement
          icon={<FaTemperatureFull className="w-6 h-6" />}
          name="Real Feel"
          value={`${forecast.realfeel} °C`}
        />

        <AirConditionsElement
          icon={<FaWind className="w-6 h-6" />}
          name="Wind"
          value={`${forecast.wind} km/hr`}
        />

        <AirConditionsElement
          icon={<SiRainmeter className="w-6 h-6" />}
          name="Chances of Rain"
          value={`${forecast.chancesofrain} %`}
        />

        <AirConditionsElement
          icon={<AiFillSun className="w-6 h-6" />}
          name="UV Index"
          value={forecast.uvindex}
        />
      </div>
    </div>
  );
};

export default WeeklyForecast;
