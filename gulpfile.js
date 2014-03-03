// Define Variables for Dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var bourbon = require('node-bourbon').includePaths;
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var jade = require('gulp-jade');
var imagemin = require('gulp-imagemin');

// Clean
gulp.task('clean', function () {
    gulp.src(['www'])
        .pipe(clean())
});

// JavaScript
gulp.task('js', function() {
  return gulp.src('scripts/*.js')
    .pipe( uglify() )
    .pipe( gulp.dest('www/js'))
});

gulp.task('js-concat', function() {
  return gulp.src('scripts/components/*.js')
    .pipe( uglify() )
    .pipe( concat('main.js'))
    .pipe( gulp.dest('www/js'))
});
// Styles
gulp.task('styles', function() {
  return gulp.src(['sass/*.scss', 'sass/*.sass'])
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

// Images
gulp.task('imagemin', function () {
    gulp.src(['images/**/*.svg', 'images/**/*.png', 'images/**/*.jpg', 'images/**/*.gif'])
        .pipe(imagemin())
        .pipe(gulp.dest('www/img/'));
});

// Watch
gulp.task('watch', function () {
  gulp.watch(['sass/**/*.scss', 'sass/**/*.sass'],['styles']);
  gulp.watch('jade/**/*.jade',['templates']);
  gulp.watch('scripts/**/*.js',['scripts']);
  gulp.watch(['images/**/*.svg', 'images/**/*.png', 'images/**/*.jpg', 'images/**/*.gif'],['imagemin']);
});

// Default Task
gulp.task('default', ['js', 'js-concat', 'styles', 'templates', 'imagemin', 'watch']);