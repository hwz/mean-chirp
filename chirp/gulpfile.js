var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function() {
  return gulp.src('./public/javascripts/app.js')
              .pipe(browserify())
              .pipe(gulp.dest('./public/javascripts/bin'))
})

gulp.task('watch', function() {
  gulp.watch(['./public/javascripts/*.js'], ['browserify']);
});

gulp.task('default', ['browserify', 'watch'])