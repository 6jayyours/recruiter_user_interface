import React, { useState } from 'react';

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const contacts = [
    { id: 1, name: 'John Doe', image: 'https://res.cloudinary.com/de7oiy033/image/upload/v1719295168/verification/bzvhub4tzw4dlf5dmiwn.jpg' },
    { id: 2, name: 'Jane Smith', image: 'https://res.cloudinary.com/de7oiy033/image/upload/v1719295168/verification/bzvhub4tzw4dlf5dmiwn.jpg' },
    // Add more contacts as needed
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full bg-white p-4 overflow-y-auto shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Contacts</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search contacts"
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id} className="flex items-center mb-4 p-2 rounded-lg hover:bg-indigo-100 cursor-pointer transition-colors duration-300 ease-in-out">
            <img src={contact.image} alt={contact.name} className="w-10 h-10 rounded-full mr-3" />
            <span className="text-gray-600">{contact.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
