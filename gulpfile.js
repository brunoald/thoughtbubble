// Define Variables for Dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
var bourbon = require('node-bourbon').includePaths;
var sass = require('gulp-sass');
var csso = require('gulp-csso');

// Basic Tasks
gulp.task('css', function() {
  return gulp.src('sass/*.scss')
    .pipe( 
      sass( {
        includePaths: ['sass'].concat(bourbon),
        errLogToConsole: true
      } ) )
    .pipe( csso() )
    .pipe( gulp.dest('www/css/') )
});

// Watch
gulp.task('watch', function () {
  gulp.watch('sass/*.scss',['css']);
});

// Default Task
gulp.task('default', ['css', 'watch']);