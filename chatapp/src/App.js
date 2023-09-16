import React, { useState, useEffect } from 'react';

const ChatWebSocket = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [recipient, setRecipient] = useState('');
  const [privateMessage, setPrivateMessage] = useState('');

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:3000');

    newSocket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    newSocket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      if (receivedData.type === 'message') {
        setChatLog((prevChatLog) => [...prevChatLog, receivedData.data]);
      } else if (receivedData.type === 'privateMessage') {
        setChatLog((prevChatLog) => [...prevChatLog, `[Private] ${receivedData.from}: ${receivedData.message}`]);
      }
    };

    setSocket(newSocket);

    // Clean up WebSocket connection when component unmounts
    return () => {
      newSocket.close();
    };
  }, []);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handlePrivateMessageChange = (event) => {
    setPrivateMessage(event.target.value);
  };

  const sendMessage = () => {
    if (socket && message.trim() !== '') {
      socket.send(message);
      setMessage('');
    }
  };

  const sendPrivateMessage = () => {
    if (socket && recipient.trim() !== '' && privateMessage.trim() !== '') {
      const messageObj = {
        to: recipient,
        message: privateMessage,
      };
      socket.send(JSON.stringify(messageObj));
      setPrivateMessage('');
    }
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        {chatLog.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <input type="text" value={message} onChange={handleInputChange} placeholder="Type your message..." />
      <button onClick={sendMessage}>Send</button>
          <img src='https://instagram.fgyd24-1.fna.fbcdn.net/v/t51.2885-19/363348036_729316155622555_7767761782335381935_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fgyd24-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=u-Yr52djFmUAX-kdY6p&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAcvzlNF5YZmBl6JoBwbDSkXj5DPQ0hPmGeikL1Q5zWiw&oe=64CC8A5A&_nc_sid=8b3546'/>
      <h2>Send Private Message</h2>
      <input type="text" value={recipient} onChange={handleRecipientChange} placeholder="Recipient" />
      <input type="text" value={privateMessage} onChange={handlePrivateMessageChange} placeholder="Type your private message..." />
      <button onClick={sendPrivateMessage}>Send Private Message</button>
    </div>
  );
};

export default ChatWebSocket;
