var test = require('tape');
var browserify = require('browserify');
var htmlminifyify = require('../');
var vm = require('vm');


test('should transform html', function(t) {
  var b = browserify();
  b.add(__dirname + '/runner/html.js');
  b.transform(htmlminifyify);

  b.bundle(function(err, src) {
    if (err) { t.end(err); }

    vm.runInNewContext(src, {
      console: {
        log: log,
      },
    });
  });

  function log(html) {
    t.comment(html);
    t.equal(html, '<div><h1>Hello World</h1></div>');
    t.end();
  }
});
