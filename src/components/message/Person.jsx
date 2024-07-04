import React from 'react';

const Person = ({ person }) => {
  return (
    <div className="flex items-center p-6 bg-indigo-100">
      <img src={person.profileImageUrl} alt={person.firstName} className="w-16 h-16 rounded-full border-4 border-indigo-500 mr-6 shadow-sm" />
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-800">{person.firstName} {person.lastName}</h2>
      </div>
    </div>
  );
};

export default Person;
