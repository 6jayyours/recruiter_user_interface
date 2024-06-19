import React from 'react';

const AppHeader = () => {
  return (
    <div className="h-18 bg-indigo-500 py-4 px-6 flex justify-between items-center ">
      <h4 className="text-white text-xl font-semibold">Admin Dashboard</h4>
      <div className="flex items-center">
        <img src='' alt="profileimage" className="w-8 h-8 rounded-full object-cover" />
        <span className="text-white ml-2">John Doe</span> 
      </div>
    </div>
  );
};

export default AppHeader;
