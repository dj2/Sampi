var gulp = require('gulp');
var webserver = require('gulp-webserver');
var jshint = require('gulp-jshint');
var csslint = require('gulp-csslint');

gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('default'));
});

gulp.task('css', function() {
  gulp.src('src/css/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter())
});

gulp.task('server', ['scripts', 'css'], function() {
  gulp.watch('src/js/**/*.js', ['scripts'])
  gulp.watch('src/css/*.css', ['css'])

  gulp.src('src')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: false,
      fallback: 'index.html'
    }));
});
