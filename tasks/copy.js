'use strict';

let gulp = require('gulp');
let plumber = require('gulp-plumber');
let notify = require('gulp-notify');

function copyFonts() {
  return gulp
    .src('src/fonts/**')
    .pipe(plumber())
    .pipe(gulp.dest('build/fonts'))
    .pipe(notify('Copy fonts nice!'));
}

function copyImages() {
  return gulp
    .src('src/images/**')
    .pipe(plumber())
    .pipe(gulp.dest('build/images'))
    .pipe(notify('Copy images nice!'));
}

function copyVendors() {
  return gulp
    .src('src/vendors/**')
    .pipe(plumber())
    .pipe(gulp.dest('build/js/vendors'))
    .pipe(notify('Copy vendors nice!'));
}

gulp.task('copyFonts', copyFonts);
gulp.task('copyImages', copyImages);
gulp.task('copyVendors', copyVendors);

gulp.task('copy', ['copyFonts', 'copyImages', 'copyVendors']);
