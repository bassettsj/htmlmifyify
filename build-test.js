var fs = require('fs');
var browserify = require('browserify');
var htmlminifyify = require('./index.js');

browserify()
    .add(__dirname + '/test/runner/html.js')
    .transform(htmlminifyify)
    .bundle()
    .pipe(fs.createWriteStream(__dirname + '/bundle.js'));
