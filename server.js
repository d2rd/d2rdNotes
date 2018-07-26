const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const PORT = 5000;
const app = express();

// NEW CODE TO CONNECT TO mlab
const mongoose = require('mongoose')

require('dotenv').config()

// set `PORT` to value in '.env'
const PORT = process.env.PORT || 5000;

// Set `dbURL` to mongoDB connection string value in '.env'
