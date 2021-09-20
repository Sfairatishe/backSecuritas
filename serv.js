const express = require('express');
const passport = require('passport')
const serv = express();
const authRoutes = require('./routes/auth');
const carrierRoutes = require('./routes/carrier');
const messageRoutes = require('./routes/message');
const requestRoutes = require('./routes/request');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const dataBase = require('./dataBase');

mongoose.connect(dataBase.mongoURL)
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error))

serv.use(passport.initialize());
require('./middleware/passport')(passport)
serv.use(morgan('dev'));
serv.use(cors());
serv.use(bodyParser.urlencoded({extended:true}));
serv.use(bodyParser.json());
serv.use('/api/auth', authRoutes);
serv.use('/api/carrier', carrierRoutes);
serv.use('/api/message', messageRoutes);
serv.use('/api/request', requestRoutes);


module.exports = serv;