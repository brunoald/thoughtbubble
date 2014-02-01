// Define Variables for Dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var bourbon = require('node-bourbon').includePaths;
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var jade = require('gulp-jade');

// JavaScript
gulp.task('js', function() {
  return gulp.src('scripts/*.js')
    .pipe( uglify() )
    .pipe( gulp.dest('www/js'))
});

gulp.task('js-concat', function() {
  return gulp.src('scripts/all/*.js')
    .pipe( uglify() )
    .pipe( concat('all.min.js'))
    .pipe( gulp.dest('www/js'))
});
// Styles
gulp.task('styles', function() {
  return gulp.src('sass/*.scss')
    .pipe( 
      sass( {
        includePaths: ['sass'].concat(bourbon),
        errLogToConsole: true
      } ) )
    .pipe( csso() )
    .pipe( gulp.dest('www/css/') )
});

gulp.task('templates', function() {

});

// Jade
gulp.task('templates', function() {
  return gulp.src('jade/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('www/'))
});

// Watch
gulp.task('watch', function () {
  gulp.watch('sass/*.scss',['styles']);
});

// Default Task
gulp.task('default', ['js', 'js-concat', 'styles', 'templates', 'watch']);