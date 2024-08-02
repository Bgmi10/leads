import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import MessageParser from './Messageparser';
import ActionProvider from './ActionProvider';
import QuickreplyRoundedIcon from '@mui/icons-material/QuickreplyRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './Chatbot.css';

const ChatWidget = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="flex justify-end">
      <div
        onClick={() => setShowChat(prev => !prev)}
        className='chat-toggle-button mr-5 bg-yellow-300 fixed p-2 rounded-full cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out bottom-6'
      >
        {!showChat ? <QuickreplyRoundedIcon style={{ fontSize: '30px' }} /> : <CloseRoundedIcon style={{ fontSize: '30px' }} />}
      </div>

      <div
        className={`chatbot-container fixed bottom-6  rounded-md right-[70px] ${showChat ? 'chatbot-show' : 'chatbot-hide'}`}
      >
        <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
      </div>
    </div>
  );
};

export default ChatWidget;
