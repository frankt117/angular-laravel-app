var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');





gulp.task('annotate', function () {
  return gulp.src('public/view/**/*.js')
    .pipe(ngAnnotate())
    .pipe(gulp.dest('dist'));
});