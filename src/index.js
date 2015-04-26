'use strict';

import through from 'through';
import { minify } from 'html-minifier';
import toJs from 'string-to-js';
import { _extend as extend } from 'util';


const DEFAULT_OPTIONS = {
  minify: {
    removeStyleLinkTypeAttributes: true,
    removeScriptTypeAttributes: true,
    removeEmptyAttributes: true,
    useShortDoctype: true,
    removeRedundantAttributes: true,
    collapseWhitespace: true,
    removeComments: true,
  },
};

export default function htmlminifyify(file, options = {}) {
  var chunks = [];
  options = extend({}, DEFAULT_OPTIONS, options);

  if (!isValidFile(file)) {
    return through();
  }

  function write(chunk) {
    chunks.push(chunk);
  }

  function done() {
    var contents = Buffer.concat(chunks).toString('utf8');
    contents = minify(contents, options);
    this.queue(toJs(contents));
    this.queue(null);
  }

  return through(write, done);
}


function isValidFile(file) {
  return file.substr(-4) === 'html';
}
