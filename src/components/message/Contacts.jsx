import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReceiverIdsBySenderId, getUsersByIds } from '../../redux/slice/authSlice';

const Contacts = ({ onSelectContact }) => {
  const dispatch = useDispatch();
  const id = useSelector(state => state.auth.id);
  const role = useSelector(state => state.auth.role);
  const [allReceivers, setAllReceivers] = useState([]);

  useEffect(() => {
    dispatch(fetchReceiverIdsBySenderId(id))
      .then((response) => {
        const receiverIds = response.payload;
        return dispatch(getUsersByIds(receiverIds));
      })
      .then((users) => {
        console.log(users.payload); // This should log the array of users fetched
        setAllReceivers(users.payload);
      })
      .catch((error) => {
        console.error('Error fetching receiver data:', error);
      });
  }, [dispatch, id]);

  const handleSendMessage = (contact) => {
    if (role === 'USER') {
      onSelectContact(contact);
      window.location.href = `/message/user?userId=${encodeURIComponent(contact.id)}`;
    } else if (role === 'RECRUITER') {
      onSelectContact(contact);
      window.location.href = `/message/recruiter?userId=${encodeURIComponent(contact.id)}`;
    }
  };

  return (
    <div className="w-full h-full bg-white p-4 overflow-y-auto shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Contacts</h2>
      <ul>
        {allReceivers.map(contact => (
          <li key={contact.id} onClick={() => handleSendMessage(contact)} className="flex items-center mb-4 p-2 rounded-lg hover:bg-indigo-100 cursor-pointer transition-colors duration-300 ease-in-out">
            <img src={contact.profileImageUrl} alt={contact.firstName} className="w-10 h-10 rounded-full mr-3" />
            <span className="text-gray-600">{contact.firstName} {contact.lastName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
