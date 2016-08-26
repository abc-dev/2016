'use strict';

let gulp = require('gulp');
let plumber = require('gulp-plumber');
let uglify = require('gulp-uglify');
let sourcemaps = require('gulp-sourcemaps');
let babel = require('gulp-babel');

gulp.task('js', jsTask);

function jsTask() {
  return gulp
    .src(['src/js/**/*.js'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write('.', {sourceRoot: '/build/js/'}))
    .pipe(gulp.dest('build/js'));
};
