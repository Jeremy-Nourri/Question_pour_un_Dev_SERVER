require('dotenv').config();
const compression = require('compression')
const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const app = express();
const router = require('./routers');
const credentials = require('./middlewares/credentials');

app.use(compression())
// i use the credentials middleware
app.use(credentials);
// i use cors to allow the front to access the back
app.use(cors({
  origin: process.env.FRONT_URL,
  optionsSuccessStatus: 200 
}));
// i use cookieParser to parse the cookies
app.use(cookieParser());

// i use express.urlencoded() to parse the body of the request
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
// i use express.json() to parse the body of the request
app.use(express.json({ limit: '50mb' }));

// i use the router
app.use(router);

// i use the port 3000 or the port defined in the .env file
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});