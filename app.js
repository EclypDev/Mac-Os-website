// * REQUIREMENTS
const express = require('express');
const http = require('http');
const ws = require('ws');

// * APP CONFIGURATION
const port = "80"

// * SERVER

const app = express();
const server = http.createServer(app);
const wss = new ws.Server({ server });

app.use(express.static('public'));

// * ROUTES

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});


// * WEBSOCKETS EVENTS

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(message);
    });
    ws.on('error', (error) => {
        console.log(error);
    });
    ws.on('close', () => {
        console.log('Client close app');
    });
    ws.on('open', () => {
        console.log('Client open app');
    });
});

// * SERVER LISTENING

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});