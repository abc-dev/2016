'use strict';

const gulp = require('gulp');
const defaultTasks = [
  'html',
  'js',
  'scss',
  'copy',
];

gulp.task('build', defaultTasks);
