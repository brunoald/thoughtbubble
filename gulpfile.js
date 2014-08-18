// Define Variables for Dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var jade = require('gulp-jade');
var imagemin = require('gulp-imagemin');


// Clean out www folder
gulp.task('clean', del.bind(null, ['www']));

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
gulp.task('styles', function () {
  return gulp.src(['sass/*.scss', 'sass/*.sass'])
        .pipe(
          sass({
            sourcemap: true,
            loadPath: ['sass'],
            style: 'compressed'
          })
        )
        .pipe(gulp.dest('www/css'));
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
  gulp.watch('scripts/**/*.js',['js', 'js-concat']);
  gulp.watch(['images/**/*.svg', 'images/**/*.png', 'images/**/*.jpg', 'images/**/*.gif'],['imagemin']);
});

// Default Task
gulp.task('default', ['js', 'js-concat', 'styles', 'templates', 'imagemin', 'watch']);