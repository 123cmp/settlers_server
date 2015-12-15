'use strict';

class Test {
    constructor(test = 'test') {
        this._test = test;
    }

    get test() {
        return this._test;
    }

    set test(test) {
        this._test = test;
    }
}

module.exports = Test;