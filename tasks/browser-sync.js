'use strict';

let gulp = require('gulp');
let browserSync = require('browser-sync').create();

gulp.task('browser-sync', browserSyncTask);

function browserSyncTask() {
	let files = [
		'build/*.html',
		'build/css/*.css',
		'build/js/*.js',
	];

	browserSync.init(files, {
		open: false,
		server: {
			baseDir: './build/',
	 	},
	});

	gulp.watch('src/scss/*.scss', ['scss']);
	gulp.watch('src/js/*.js', ['js']);
	gulp.watch('src/js/*.js',['jshint']);
	gulp.watch(files).on('change', browserSync.reload);
}
