'use strict';

let gulp = require('gulp');
let plumber = require('gulp-plumber');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');
let notify = require('gulp-notify');

gulp.task('scss', scssTask);

function scssTask() {
  let autoprefixerOptions = {
    browsers: ['last 2 versions'],
    cascade: false,
  };

  return gulp
    .src(['src/scss/**/[^_]*.scss'])
    .pipe(plumber())
    .pipe(sass().on('error', notify.onError('Deu ruim: <%= error.message %>')))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css'))
    .pipe(notify('CSS OK!'));
}
