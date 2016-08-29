'use strict';

let gulp = require('gulp');
let plumber = require('gulp-plumber');

gulp.task('html', htmlTask);

function htmlTask() {
  return gulp
    .src(['src/*.html'])
    .pipe(plumber())
    .pipe(gulp.dest('build/'));
};
