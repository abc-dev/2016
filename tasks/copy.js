'use strict';

let gulp = require('gulp');
let plumber = require('gulp-plumber');

function copyFonts() {
  return gulp
    .src('src/fonts/**')
    .pipe(plumber())
    .pipe(gulp.dest('build/fonts'))
}

function copyImages() {
  return gulp
    .src('src/images/**')
    .pipe(plumber())
    .pipe(gulp.dest('build/images'));
}

function copyVendors() {
  return gulp
    .src('src/vendors/**')
    .pipe(plumber())
    .pipe(gulp.dest('build/js/vendors'));
}

gulp.task('copyFonts', copyFonts);
gulp.task('copyImages', copyImages);
gulp.task('copyVendors', copyVendors);

gulp.task('copy', ['copyFonts', 'copyImages', 'copyVendors']);
