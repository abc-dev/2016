var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	autoprefixer = require('gulp-autoprefixer'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	spritesmith = require('gulp-spritesmith'),
	browserSync = require('browser-sync').create();


gulp.task('scss', function () {
  return gulp.src(['src/scss/**/[^_]*.scss'])
  .pipe(plumber())
	.pipe(sass().on('error', notify.onError("Deu ruim: <%= error.message %>")))
	.pipe(gulp.dest('build/css'))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(notify('CSS OK!'));
});

gulp.task('js', function () {
  return gulp.src(['src/js/**/*.js'])
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('build/js'))
	.pipe(notify('JS nice!'));
});

gulp.task('jshint', function () {
  return gulp.src(['src/js/**/*.js'])
	.pipe(plumber())
	.pipe(jshint())
	.pipe(jshint.reporter(stylish));
});
  
gulp.task('browser-sync', function () {
	var files = [
		'build/*.html',
		'build/css/*.css',
		'build/js/*.js',
	];

	browserSync.init(files, {
		open: false,
		server: {
		baseDir: './build/'
	   }
	});

	gulp.watch('src/scss/*.scss', ['scss']);
	gulp.watch('src/js/*.js', ['js']);
	gulp.watch('src/js/*.js',['jshint']);
	gulp.watch(files).on('change', browserSync.reload);
});

gulp.task('server', ['browser-sync']);
