import React, { useState, useEffect } from 'react';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState(null);
  const [registered, setRegistered] = useState(false); // Track registration status
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:3001');

    newSocket.addEventListener('open', () => {
      console.log('Connected to server');
      setSocket(newSocket);
    });

    newSocket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'message') {
        setChatHistory((prevChatHistory) => [...prevChatHistory, message]);
      } else if (message.type === 'userList') {
        setUsers(message.userList);
      }
    });

    return () => {
      if (newSocket) {
        newSocket.close();
      }
    };
  }, []);

  const handleRegister = () => {
    if (username.trim() !== '' && socket) {
      const registerMessage = {
        type: 'register',
        username: username,
      };
      socket.send(JSON.stringify(registerMessage));
      setRegistered(true); // Mark as registered
    }
  };

  const sendMessage = () => {
    if (inputText.trim() !== '' && socket) {
      const message = {
        type: 'message',
        text: inputText,
      };
      socket.send(JSON.stringify(message));
      setInputText('');
    }
  };

  return (
    <div>
      <h1>Global Chat</h1>
      {!registered ? ( // Show registration section if not registered
        <div>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
        </div>
      ) : (
        // Show chat section if registered
        <div>
          <div>
            {chatHistory.map((message, index) => (
              <div key={index}>
                <strong>{message.username}:</strong> {message.text}
              </div>
            ))}
          </div>
          <div>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
          <div>
            <h2>Online Users:</h2>
            {users.map((user, index) => (
              <div key={index}>{user}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
