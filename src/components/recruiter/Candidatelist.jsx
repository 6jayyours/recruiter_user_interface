import React from "react";
import { BsBriefcase, BsCalendar, BsClock, BsGeoAlt } from "react-icons/bs";
import { Link } from "react-router-dom";

const Candidatelist = () => {
  return (
    <div className="overflow-x-auto p-2 w-full">
      <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-4 w-full">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <div className="font-bold text-xl mb-2 text-gray-800"></div>
            <p className="text-gray-600 text-sm mb-2"></p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <BsBriefcase className="text-blue-600 mr-1" />
              <span className="text-gray-600"></span>
            </div>
            <div className="flex items-center mb-2">
              <BsClock className="text-purple-600 mr-1" />
              <span className="text-gray-600"></span>
            </div>
            <div className="flex items-center mb-2">
              <BsCalendar className="text-indigo-600 mr-1" />
              <span className="text-gray-600">
              
              </span>
            </div>
            <div className="flex items-center mb-2">
              <BsGeoAlt className="text-green-600 mr-1" />
              <span className="text-gray-600"></span>
            </div>
          </div>
          <div>
            <Link to={"/jobapplications"}>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md mr-4">
                View Applications
              </button>
            </Link>
            <Link to={"/job"}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                View Job
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidatelist;
