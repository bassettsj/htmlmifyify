htmlminifyify
===========

[![Build Status](https://travis-ci.org/bassettsj/htmlminifyify.svg?branch=master)](https://travis-ci.org/bassettsj/htmlminifyify)

> `require()`-able html file with a built in html minifier.

```js
var menuHtml = require('./menu.html');
```

## Installation

```sh
npm install htmlminifyify
```

## Usage

Use as a standard browserify transform in `package.json`, on the cli or programatically (like in a build tool).

### Add to package.json

```json
{
  "name": "mypkg",
  "version": "0.1.0",
  "main": "main.js",
  "browserify": {
    "transform": [ "htmlminifyify" ]
  }
}
```

### CLI

```
browserify -t htmlminifyify entry.js > bundle.js
```

### Programmatically

```js
var gulp = require('gulp');
var browserify = require('browserify');
var htmlminifyify = require('htmlminifyify');

gulp.task('js', [], function () {
  var b = browserify('./entry')
    .transform(htmlminifyify)
    .bundle()
    .pipe(gulp.dest('./dist/js/app-bundle.js'));
  return b;
});
```

### Roadmap

- add string transforms for file extensions.
