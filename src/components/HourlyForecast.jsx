import { FaClock } from "react-icons/fa6";
import TemperatureChart from "./TemperatureChart";
const HourlyForecast = ({ hourlyData }) => {
  return (
    <div className="card hourlyforecast text-white flex flex-col py-2 gap-2">
      {/* Heading */}
      <div className="flex items-center gap-2 px-6">
        <FaClock className="" />
        <h1 className="text-sm tracking-wider">24-hour forecast</h1>
      </div>

      {/* graph */}
      <div className="px-2 overflow-auto">
        <TemperatureChart data={hourlyData} />
      </div>
    </div>
  );
};
export default HourlyForecast;
