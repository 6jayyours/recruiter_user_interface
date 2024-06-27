import React from 'react';

const Person = () => {
    const person = { name: 'John Doe', image: 'https://res.cloudinary.com/de7oiy033/image/upload/v1719295168/verification/bzvhub4tzw4dlf5dmiwn.jpg' };

    return (
        <div className="flex items-center p-6 bg-indigo-100 ">
            <img src={person.image} alt={person.name} className="w-16 h-16 rounded-full border-4 border-indigo-500 mr-6 shadow-sm" />
            <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800">{person.name}</h2>
            </div>
        </div>
    );
}

export default Person;
