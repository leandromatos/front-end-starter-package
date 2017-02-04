let gulp = require('gulp')
let runSequence = require('run-sequence')
let browserify = require('browserify')
let vueify = require('vueify')
let babelify = require('babelify')
let aliasify = require('aliasify')
let source = require('vinyl-source-stream')
let jshint = require('gulp-jshint')
let jshintStylish = require('jshint-stylish')
let uglify = require('gulp-uglify')
let concat = require('gulp-concat')
let plumber = require('gulp-plumber')
let gulpIf = require('gulp-if')
let esformatter = require('gulp-esformatter')
let buffer = require('vinyl-buffer')

let Scripts = (config, args, log, error, success) => {
    gulp.task('scripts:formatter', () => {
        return gulp.src(config.scripts.formatter.src)
            .pipe(plumber({
                errorHandler: error
            }))
            .pipe(log({
                header: 'Formatter scripts:'
            }))
            .pipe(esformatter())
            .pipe(gulp.dest(config.scripts.formatter.dest))
            .pipe(plumber.stop())
    })

    gulp.task('scripts:lint', () => {
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
            .pipe(plumber.stop())
    })

    gulp.task('scripts:browserify', () => {
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
            .pipe(plumber.stop())
    })

    gulp.task('scripts', (callback) => {
        return runSequence('scripts:formatter', 'scripts:lint', 'scripts:browserify', callback)
    })
}

module.exports = Scripts
