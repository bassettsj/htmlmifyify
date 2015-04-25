var fs = require('fs');
var browserify = require('browserify');
var htmlminifyify = require('./');


browserify()
    .add('./test/runner/html.js')
    .transform(htmlminifyify)
    .bundle()
    .pipe(fs.createWriteStream('./bundle.js'));
