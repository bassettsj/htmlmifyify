import test from 'tape';
import browserify from 'browserify';
import htmlminifyify from '../src';
import vm from 'vm';

test('should transform html', (t) => {
  var b = browserify();
  b.add(__dirname + '/runner/html.js');
  b.transform(htmlminifyify);

  b.bundle((err, src) => {
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
