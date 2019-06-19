import SocketIO from 'socket.io';
import Message from './index';

const http = require('http').Server(app);

const io = socketio(http, {
  'reconnect': true,
  'reconnection delay': 500,
  'max reconnection attempts': 99999,
  'secure': true,
  'sync disconnect on unload': true
});

io.on('connection', socket => {
  console.log('user connected');
  socket.on('message', message => {
  	const { from, text, conversation } = message;
  	const newMessage = new Message({ from, text, conversation });
  	newMessage.save();
  });
});