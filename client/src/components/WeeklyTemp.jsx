import { FaCalendarAlt } from "react-icons/fa";
const WeeklyTemp = () => {
  return (
    <div className="card weeklyTemp text-white flex flex-col py-2 gap-2">
      {/* Heading */}
      <header className="flex items-center gap-2 px-6">
        <FaCalendarAlt />
        <h1 className="text-sm tracking-wider">7-day forecast</h1>
      </header>
    </div>
  );
};
export default WeeklyTemp;
