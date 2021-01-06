const io = require('socket.io');
const Aggregator = require('./collections/ThemeAggregator');


const socket = io({
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});

const port = 1234;
socket.listen(port);
console.warn('[IO] Socket listening on port', port);

socket.on('connection', client => {
    client.on('disconnect', () => {});

    client.on('getThemes', () => {
        client.emit('getThemes', Aggregator.themes);
    })
});
