var src_path  = "src/",
    dist_path = "dist/";

var gulp         = require('gulp'),
	stylus       = require('gulp-stylus'),
	sourcemaps   = require('gulp-sourcemaps'),
	uglify       = require('gulp-uglify'),
	minify       = require('gulp-cssnano'),
	minifyhtml   = require('gulp-htmlmin'),
	browsersync  = require('browser-sync').create(),
	plumber      = require('gulp-plumber'),
	lost         = require('lost'),
	rupture      = require('rupture'),
	nib          = require('nib'),
	autoprefixer = require('autoprefixer'),
	postcss      = require('gulp-postcss'),
	jade         = require('gulp-jade');

// start compiling code as soon as gulp is called, and watch for file changes
gulp.task('default', ['build-all'], function(){
	
	browsersync.init({ server: './'});

	// watch for changes inside src folder
	gulp.watch(src_path + '**/*.styl', ['build-css']);
	gulp.watch(src_path + '**/*.js', ['build-js']);
	gulp.watch(src_path + '**/*.jade', ['build-html']);
});

// optimise all source code
gulp.task('build-all', ['build-css', 'build-js', 'build-html']);

// compile stylus into compressed css
gulp.task('build-css', function(){
	return gulp.src(src_path + 'stylus/style.styl')
	  .pipe(plumber())
	  .pipe(sourcemaps.init())
	  .pipe(stylus({use: [rupture(), nib()]}))
	  .pipe(postcss([
			lost(),
			autoprefixer()
		]))
	  // compress compiled css
	  .pipe(minify())
	  .pipe(sourcemaps.write())
	  // output compiled + compressed file to dist
	  .pipe(gulp.dest(dist_path + 'css'))
	  // update browser
	  .pipe(browsersync.stream());
});

// compile js files and compress them
gulp.task('build-js', function(){
	return gulp.src(src_path + 'js/**/*.js')
	  // foces gulp to output errors to terminal
	  .pipe(plumber())
	  .pipe(sourcemaps.init())
	  // compress js files
	  .pipe(uglify())
	  .pipe(sourcemaps.write())
	  // output file to dist
	  .pipe(gulp.dest(dist_path + 'js'))
	  // update browser
	  .pipe(browsersync.stream());
});

// compile jade files and compress them♠
gulp.task('build-html', function(){
	return gulp.src(src_path + 'index.jade')
	  // forces gulp to output errors to terminal
	  .pipe(plumber())
	  .pipe(jade())
	  .pipe(minifyhtml())
	  // output file to main directory
	  .pipe(gulp.dest('./'))
	  // update browser
	  .pipe(browsersync.stream());
});