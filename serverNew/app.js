
const http = require('http'); 
const express = require('express'); 
const logger = equire('morgan'); 
const bodyParser = require('body-parser'); 
const routes = require('./server/routes');
const passport = require('passport'); 
const cors = require('cors');


const hostname = '127.0.0.1';
const port = 8080;
const app = express() // setup express application
const server = http.createServer(app);

app.use(cors())
app.use(logger('dev')); // log requests to the console

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());

routes(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the default API route',
}));

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
