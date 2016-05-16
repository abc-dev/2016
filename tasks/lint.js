'use strict';

let gulp = require('gulp');
let eslint = require('gulp-eslint');

let files = [
  'src/js/**/*.js',
  'gulpfile.js',
  'tasks/*.js',
  '.eslintrc.js',
];

gulp.task('lint', lintTask);

function lintTask() {
  return gulp
    .src(files)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', beep);
}

function beep() {
  let gutil = require('gulp-util');
  gutil.beep();
}
