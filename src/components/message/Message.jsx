import React, { useState } from "react";

const Message = ({handleSend}) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello!",
      sender: "John Doe",
      image:
        "https://res.cloudinary.com/de7oiy033/image/upload/v1719295168/verification/bzvhub4tzw4dlf5dmiwn.jpg",
      timestamp: new Date(),
    },
    {
      id: 2,
      text: "Hi there!",
      sender: "Me",
      image:
        "https://res.cloudinary.com/de7oiy033/image/upload/v1719295168/verification/bzvhub4tzw4dlf5dmiwn.jpg",
      timestamp: new Date(),
    },
    // Add more messages as needed
  ]);
  const [newMessage, setNewMessage] = useState("");
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
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${
              message.sender === "Me" ? "justify-end" : "justify-start"
            }`}
          >
            {message.sender !== "Me" && (
              <img
                src={message.image}
                alt={message.sender}
                className="w-10 h-10 rounded-full mr-2"
              />
            )}
            <div
              className={`inline-block p-2 rounded-lg ${
                message.sender === "Me"
                  ? "bg-indigo-300 text-white"
                  : "bg-gray-200"
              }`}
            >
              {message.text && (
                <p className="text-sm text-gray-500 mb-1">{message.text}</p>
              )}
              {message.file && (
                <p className="text-sm text-blue-500 mb-1">
                  {message.file.name}
                </p>
              )}
              {message.audio && (
                <p className="text-sm text-blue-500 mb-1">
                  {message.audio.name}
                </p>
              )}
              {message.document && (
                <p className="text-sm text-blue-500 mb-1">
                  {message.document.name}
                </p>
              )}
              <p className="text-xs text-gray-400">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
            </div>
            {message.sender === "Me" && (
              <img
                src={message.image}
                alt={message.sender}
                className="w-10 h-10 rounded-full ml-2"
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
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
          className="p-2 bg-gray-200 text-gray-700  hover:bg-gray-300 cursor-pointer"
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
