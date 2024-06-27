import { IoSettings } from "react-icons/io5";
import { FaCloudSunRain } from "react-icons/fa6";
import { MdExplore } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Menu = () => {
  return (
    <div className="card menu justify-between flex flex-col p-4 text-gray-400">
      {/* profile image div */}

      <div className="items-center mb-4">
        <img
          src=""
          className="w-full h-full rounded-full bg-gray-400"
          alt="ProfileImage"
        />
      </div>

      {/* Other Features  */}

      <div className="space-y-4">
        <div className="flex flex-col items-center hover:text-white">
          <FaCloudSunRain className="w-6 h-6 mb-1" />
          <span className="text-xs">Weather</span>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <MdExplore className="w-6 h-6 mb-1" />
          <span className="text-xs">Explore</span>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <IoLocation className="w-6 h-6 mb-1" />
          <span className="text-xs">Cities</span>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <IoSettings className="w-6 h-6 mb-1" />
          <span className="text-xs">Settings</span>
        </div>
      </div>
    </div>
  );
};
export default Menu;
