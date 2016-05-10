'use strict';

let gulp = require('gulp');
let plumber = require('gulp-plumber');
let jshint = require('gulp-jshint');
let stylish = require('jshint-stylish');

gulp.task('jshint', jshintTask);

function jshintTask() {
  return gulp
  	.src(['src/js/**/*.js'])
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
}
