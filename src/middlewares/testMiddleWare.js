'use strict';

function TestMiddleWare(req, res, next) {
    console.log('Time:', Date.now());
    next();
}

module.exports = TestMiddleWare;