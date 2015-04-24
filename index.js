'use strict';

var through = require('through');
var minify  = require('html-minifier').minify;
var toJs    = require('string-to-js');
var extend  = require('util')._extend;
module.exports = exports = htmlminifyify;

const DEFAULT_OPTIONS = {
    removeStyleLinkTypeAttributes: true,
    removeScriptTypeAttributes: true,
    removeEmptyAttributes: true,
    useShortDoctype: true,
    removeRedundantAttributes: true,
    collapseWhitespace: true,
    removeComments: true
};

function htmlminifyify (file, options) {
    options = extend({}, DEFAULT_OPTIONS, options);
    if (!isValidFile(file)) return through();

    var chunks = [];

    function write (chunk) {
         chunks.push(chunk);
    }

    function done () {
        var contents = Buffer.concat(chunks).toString('utf8');
        contents = minify(contents, options);
        this.queue(toJs(contents));
        this.queue(null);
    }
    return through(write, done);
}

function isValidFile (file) {
  return file.substr(-4) === 'html';
}
