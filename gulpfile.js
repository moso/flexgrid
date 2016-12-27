var gulp     = require('gulp');
var watch    = require('gulp-watch');
var concat   = require('gulp-concat');
var sass     = require('gulp-sass');
var uglify   = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

gulp.task('scss', function() {
    return gulp.src("scss/flexgrid.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("css"));
    return stream;
});


gulp.task('css-ugly', function() {
    return gulp.src("css/flexgrid.css")
        .pipe(cleanCSS({processImport:false}))
        .pipe(concat('flexgrid.min.css'))
        .pipe(gulp.dest("css"))
        .on('error', swallowError);
    return stream;
});

gulp.task('watch', ['scss', 'css-ugly'], function() {
    gulp.watch('./scss**/.scss', ['scss', 'css-ugly']);
});

gulp.task('default', ['scss', 'css-ugly']);

function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}
