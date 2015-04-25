'use strict';

try {
    module.exports = require('./lib/index.js');
} catch (e) {
    console.error(e);
    require('babel/register');
    module.exports = require('./src/index');
}
