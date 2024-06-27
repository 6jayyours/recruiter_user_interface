import React from 'react'
import Contacts from '../../components/message/Contacts'
import Person from '../../components/message/Person'
import Message from '../../components/message/Message'

const Chat = () => {
  return (
    <div className="flex h-[69vh] overflow-hidden mt-24 p-2">
      <div className="w-1/4 h-full border border-gray-300">
        <Contacts />
      </div>
      <div className="flex flex-col w-3/4 h-full">
        <div className="border border-gray-300">
          <Person />
        </div>
        <div className="flex-grow overflow-y-auto overflow-hidden border border-gray-300">
          <Message />
        </div>
      </div>
    </div>
  )
}

export default Chat