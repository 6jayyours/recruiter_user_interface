import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Message = ({ handleSend, messageInput, setMessageInput, history }) => {
  

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAudioChange = (event) => {
    setSelectedAudio(event.target.files[0]);
  };

  const handleDocumentChange = (event) => {
    setSelectedDocument(event.target.files[0]);
  };

  return (
    <div className="flex flex-col h-full p-4 bg-white rounded-lg shadow-md">
      
      <div className="mt-4 flex items-center">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message"
        />
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*,video/*"
          className="hidden"
          id="file-input"
        />
        <label
          htmlFor="file-input"
          className="p-2 bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
        >
          📷
        </label>
        <input
          type="file"
          onChange={handleAudioChange}
          accept="audio/*"
          className="hidden"
          id="audio-input"
        />
        <label
          htmlFor="audio-input"
          className="p-2 bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
        >
          🎵
        </label>
        <input
          type="file"
          onChange={handleDocumentChange}
          accept=".pdf,.doc,.docx,.txt"
          className="hidden"
          id="document-input"
        />
        <label
          htmlFor="document-input"
          className="p-2 bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
        >
          📄
        </label>
        <button
          onClick={handleSend}
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Message;
