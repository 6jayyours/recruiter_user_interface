import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ id, firstname, lastname }) => {
  return (
    <div className="group bg-white overflow-hidden rounded-md shadow text-center p-6 mb-4">
      <img src="" className="size-20 rounded-full shadow mx-auto" />
      <div className="mt-2">
        <h3 className="hover:text-indigo-600 font-semibold text-lg">
          {firstname} {lastname}
        </h3>
        <p className="text-sm text-slate-400">Web developer</p>
      </div>
      <div className="flex justify-between mt-2">
        <div className="block">
          <span className="text-slate-400">Place</span>
          <span className="block text-sm font-semibold">Bangalore</span>
        </div>
        <div className="block">
          <span className="text-slate-400">Experience</span>
          <span className="block text-sm font-semibold">2 years</span>
        </div>
      </div>
      <div className="mt-3">
        <Link to={`/userdetail/${id}`}>
          <button className="bg-indigo-600 hover:bg-indigo-600 text-white rounded-md py-[5px] px-[1rem]">
            Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
