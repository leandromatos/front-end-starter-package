var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserify = require('browserify');
var vueify = require('vueify');
var babelify = require('babelify');
var aliasify = require('aliasify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var gulpIf = require('gulp-if');
var esformatter = require('gulp-esformatter');
var buffer = require('vinyl-buffer');

module.exports = function(config, args, log, error, success) {
    gulp.task('scripts:formatter', function() {
        return gulp.src(config.scripts.formatter.src)
            .pipe(plumber({
                errorHandler: error
            }))
            .pipe(log({
                header: 'Formatter scripts:'
            }))
            .pipe(esformatter())
            .pipe(gulp.dest(config.scripts.formatter.dest))
            .pipe(plumber.stop());
    });

    gulp.task('scripts:lint', function() {
        return gulp.src(config.scripts.lint.src)
            .pipe(plumber({
                errorHandler: error
            }))
            .pipe(log({
                header: 'Scripts lint:'
            }))
            .pipe(jshint())
            .pipe(jshint.reporter(jshintStylish))
            .pipe(jshint.reporter('fail'))
            .pipe(plumber.stop());
    });

    gulp.task('scripts:browserify', function() {
        return browserify(config.scripts.browserify.src)
            .transform(babelify)
            .transform(vueify)
            .transform(aliasify)
            .bundle()
            .on('error', error)
            .pipe(source(config.scripts.browserify.dest))
            .pipe(plumber({
                errorHandler: error
            }))
            .pipe(log({
                header: 'Scripts transform with browserify:'
            }))
            .pipe(gulpIf(args.production === true, buffer()))
            .pipe(gulpIf(args.production === true, uglify()))
            .pipe(gulp.dest(''))
            .pipe(plumber.stop());
    });

    gulp.task('scripts', function(callback) {
        return runSequence('scripts:formatter', 'scripts:lint', 'scripts:browserify', callback);
    });
};
