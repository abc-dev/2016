'use strict';

let gulp = require('gulp');
let plumber = require('gulp-plumber');
let notify = require('gulp-notify');

gulp.task('html', htmlTask);

function htmlTask() {
  return gulp
    .src(['src/*.html'])
    .pipe(plumber())
    .pipe(gulp.dest('build/'))
    .pipe(notify('HTML nice!'));
};
