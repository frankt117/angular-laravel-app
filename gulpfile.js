var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


gulp.task('annotate', function () {
  return gulp.src('public/view/**/*.js')
    .pipe(ngAnnotate())
    .pipe(gulp.dest('dist'));
});


gulp.task('compress', function() {
  return gulp.src('dist/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});


gulp.task('concat', function() {
  return gulp.src('dist/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/dist'))
});