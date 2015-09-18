'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var csslint = require('gulp-csslint');

gulp.task('css', function() {
  gulp.src('src/css/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter())
});

gulp.task('server', ['css'], function() {
  gulp.watch('src/css/*.css', ['css'])

  gulp.src('src')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: false,
      fallback: 'index.html'
    }));
});
