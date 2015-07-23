var io = require('socket.io').listen(8080);

io.on('connection', function (socket) {

  socket.on('emit1', function (data) {
  	socket.emit('emit1',data);
  	socket.broadcast.emit('emit1',data);
  });

  socket.on('emit2', function (data) {
  	socket.emit('emit2',data);
  	socket.broadcast.emit('emit2',data);
  });

  socket.on('emit3', function (data) {
  	socket.emit('emit3',data);
  	socket.broadcast.emit('emit3',data);
  });

  socket.on('disconnect', function () {
    console.log('disconnect.');
  });
});