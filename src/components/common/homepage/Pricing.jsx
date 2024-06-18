import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
      <h3 className="text-3xl font-semibold text-center mb-8">
          PLANS
        </h3>
        <div className="grid md:grid-cols-2 gap-8 ">
          <div className="bg-white rounded-lg shadow-lg py-8 px-6 border border-indigo-700">
            <h6 className="text-lg font-bold mb-5 text-indigo-500">FREE</h6>
            <div className="flex items-center mb-5">
              <span className="text-xl font-semibold">₹</span>
              <span className="text-4xl font-semibold mb-0">0</span>
              <span className="text-xl font-semibold self-end mb-1">
                /month
              </span>
            </div>
            <ul className="border-t border-gray-300 pt-5 ">
              <li className="flex items-center text-gray-400 mb-3">
                <FaRegCheckCircle className="text-green-600 text-xl mr-2" />
                Limited Jobs
              </li>
              <li className="flex items-center text-gray-400 mb-3">
                <FaRegCheckCircle className="text-green-600 text-xl mr-2" />
                Basic Profile Creation
              </li>
              <li className="flex items-center text-gray-400 mb-3">
                <FaRegCheckCircle className="text-green-600 text-xl mr-2" />
                Message Recruiter
              </li>
              <li className="flex items-center text-gray-400 mb-3">
                <FaRegCheckCircle className="text-green-600 text-xl mr-2" />
                Security
              </li>
            </ul>
            <button className="bg-indigo-700 text-white hover:bg-indigo-900 duration-300 rounded-md py-2 px-6 text-base sm:text-lg mt-6">
              Get Started
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-lg py-8 px-6 border border-indigo-700">
            <h6 className="text-lg font-bold mb-5 text-indigo-500">STANDARD</h6>
            <div className="flex items-center mb-5">
              <span className="text-xl font-semibold">₹</span>
              <span className="text-4xl font-semibold mb-0">599</span>
              <span className="text-xl font-semibold self-end mb-1">
                /month
              </span>
            </div>
            <ul className="border-t border-gray-300 pt-5 ">
              <li className="flex items-center text-gray-400 mb-3">
                <FaRegCheckCircle className="text-green-600 text-xl mr-2" />
                More Jobs
              </li>
              <li className="flex items-center text-gray-400 mb-3">
                <FaRegCheckCircle className="text-green-600 text-xl mr-2" />
                Basic Profile Creation
              </li>
              <li className="flex items-center text-gray-400 mb-3">
                <FaRegCheckCircle className="text-green-600 text-xl mr-2" />
                Message Recruiter
              </li>
              <li className="flex items-center text-gray-400 mb-3">
                <FaRegCheckCircle className="text-green-600 text-xl mr-2" />
                Security
              </li>
            </ul>
            <button className="bg-indigo-700 text-white hover:bg-indigo-900 duration-300 rounded-md py-2 px-6 text-base sm:text-lg mt-6">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
