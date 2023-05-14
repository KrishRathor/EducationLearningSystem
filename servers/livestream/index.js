const { Server } = require('socket.io')

const io = new Server(3001, {
    cors: true,
});

const emailToSockedIdMap = new Map();
const socketToEmailIdMap = new Map();

io.on('connection', socket => {

    console.log('Socket connected', socket.id);

    socket.on('room:join', data => {

        const  {email, room} = data;

        emailToSockedIdMap.set(email, socket.id);
        socketToEmailIdMap.set(socket.id, email);

        io.to(room).emit('user:joined', { email, id: socket.id })
        socket.join(room);
        io.to(socket.id).emit('room:join', data);
    })
})
