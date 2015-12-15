'use strict';

var express = require('express'),
    app = express(),
    testMiddleWare = require('./middlewares/testMiddleWare'),
    Test = require('./modules/Test');

let test = new Test();
console.log(test.test);

app.use(testMiddleWare);
app.listen(9900);