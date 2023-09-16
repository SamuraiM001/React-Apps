const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ noServer: true });

const users = {};

wss.on('connection', (socket) => {
  console.log('A client connected');

  socket.on('message', (message) => {
    const parsedMessage = JSON.parse(message);
    if (parsedMessage.type === 'register') {
      users[socket.id] = parsedMessage.username;
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'userList', userList: Object.values(users) }));
        }
      });
    } else if (parsedMessage.type === 'message') {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({
            type: 'message',
            username: users[socket.id],
            text: parsedMessage.text,
          }));
        }
      });
    }
  });

  socket.on('close', () => {
    delete users[socket.id];
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: 'userList', userList: Object.values(users) }));
      }
    });
    console.log('A client disconnected');
  });
});

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

server.listen(3001, () => {
  console.log('WebSocket server is listening on port 3001');
});
