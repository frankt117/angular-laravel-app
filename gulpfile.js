var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');


gulp.task('annotate', function () {
  return gulp.src('public/view/**/*.js')
    .pipe(ngAnnotate())
    .pipe(gulp.dest('dist'));
});


gulp.task('compress', function() {
  return gulp.src('public/view/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/view'))
});