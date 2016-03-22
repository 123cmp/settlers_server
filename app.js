'use strict';

var express = require('express'),
    app = express(),
    mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/settlers_db'
);


mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ');
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

console.info("App is listening 9900");
app.listen(9900);