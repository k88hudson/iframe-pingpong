var gulp = require('gulp');
var server = require('gulp-webserver');

gulp.task('parent', function() {
  return gulp.src('./')
    .pipe(server({
        port: 1963,
        livereload: {enable: true, port: 2345},
        fallback: './demo/parent/index.html'
    }));
});

gulp.task('child', function() {
  return gulp.src('./')
    .pipe(server({
        port: 1990,
        livereload: {enable: true, port: 2346},
        fallback: './demo/child/index.html'
    }));
});

gulp.task('demo', ['parent', 'child']);
