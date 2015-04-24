var test = require('tape');
var browserify = require('browserify');
var htmlminifyify = require('../');
var vm = require('vm');


test('should transform html', function (t) {
    // t.plan(1);
    var b = browserify();
    b.add(__dirname + '/runner/html.js');
    b.transform(htmlminifyify);

    b.bundle(function (err, src) {
        if (err) t.end(err);
        console.log(src.toString());
        vm.runInNewContext(src, { console: { log: log } });

    });

    function log (msg) {

        t.equal(msg, '<div><h1>Hello World</h1></div>');
        t.pass('Works');
        t.end();
    }
});
