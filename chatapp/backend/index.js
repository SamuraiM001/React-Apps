const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const users = new Set();

wss.on('connection', (ws) => {
  console.log('A new client connected.');

  // Generate a unique user identifier for each client
  ws.user = generateUniqueId();

  // Add the user to the list of connected users
  users.add(ws);

  // Broadcast a message to all connected users
  const broadcastMessage = (message) => {
    users.forEach((user) => {
      if (user.readyState === WebSocket.OPEN) {
        user.send(JSON.stringify({ type: 'message', data: message }));
      }
    });
  };

  // Handle incoming messages from the client
  ws.on('message', (message) => {
    console.log('Received message:', message);
    const parsedMessage = JSON.parse(message);

    // If the message includes a 'to' field, it's a private message
    if (parsedMessage.to && parsedMessage.message) {
      users.forEach((user) => {
        if (user !== ws && user.readyState === WebSocket.OPEN && user.user === parsedMessage.to) {
          const privateMessage = {
            type: 'privateMessage',
            from: ws.user,
            message: parsedMessage.message,
          };
          user.send(JSON.stringify(privateMessage));
        }
      });
    } else {
      // Otherwise, it's a regular message to be broadcasted
      broadcastMessage(message);
    }
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected.');
    users.delete(ws);
  });
});

function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9); // A simple function to generate a unique identifier
}

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
