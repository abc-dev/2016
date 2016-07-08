'use strict';

const gulp = require('gulp');
const defaultTasks = [
  'html',
  'js',
  'scss',
  'copy',
  'server',
];

gulp.task('default', defaultTasks);
