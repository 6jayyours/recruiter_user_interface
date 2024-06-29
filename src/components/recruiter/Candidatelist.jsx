import React from 'react';
import UserCard from "./Users/UserCard";

const Candidatelist = ({ candidates }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {candidates.map(user => (
        <UserCard
          key={user.id}
          firstname={user.firstName}
          lastname={user.lastName}
        />
      ))}
    </div>
  );
};

export default Candidatelist;
