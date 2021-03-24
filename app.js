'use strict';

const HTTP = require('http');

const HOSTNAME = '127.0.0.1',
    PORT = 3000;

const cors = require('cors');

const express = require('express'),
    session = require('express-session');

const app = express();

app.use(cors());

app.use(session({
    secret: 'this is a secret',
    resave: false,
    saveUninitialized: false,
    is_logged_in: false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use (express.static('public'));

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`)
});

const rootController = require('./routes/index');
const vacationsController = require('./routes/vacations');
const proxyController = require('./routes/proxy');
const itineraryController = require('./routes/itinerary')

app.use('/', rootController);
app.use('/vacations', vacationsController);
app.use('/proxy', proxyController);
app.use('/itinerary', itineraryController)