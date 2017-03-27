let gulp = require('gulp-help')(require('gulp'))
let sass = require('gulp-sass')
let scssLint = require('gulp-scss-lint')
let scssLintStylish = require('gulp-scss-lint-stylish')
let postCss = require('gulp-postcss')
let autoprefixer = require('autoprefixer')
let cleanCss = require('gulp-clean-css')
let runSequence = require('run-sequence').use(gulp)
let plumber = require('gulp-plumber')
let gulpIf = require('gulp-if')
let concat = require('gulp-concat')

let Styles = (config, args, log, error, success) => {
    gulp.task('styles:lint', false, () => {
        return gulp.src(config.styles.lint.src)
            .pipe(plumber({
                errorHandler: error
            }))
            .pipe(log({
                header: 'Styles lint:'
            }))
            .pipe(scssLint({
                customReport: scssLintStylish
            }))
            .pipe(scssLint.failReporter())
            .pipe(plumber.stop())
    })

    gulp.task('styles:process', false, () => {
        return gulp.src(config.styles.process.src)
            .pipe(plumber({
                errorHandler: error
            }))
            .pipe(log({
                header: 'Styles process:'
            }))
            .pipe(sass({
                noCache: true
            }).on('error', error))
            .pipe(postCss([autoprefixer({
                browsers: ['last 2 version'],
                cascade: false
            })]))
            .pipe(gulp.dest(config.styles.process.dest))
            .pipe(plumber.stop())
    })

    gulp.task('styles:build', false, () => {
        return gulp.src(config.styles.build.src)
            .pipe(plumber({
                errorHandler: error
            }))
            .pipe(log({
                header: 'Styles build:'
            }))
            .pipe(concat('app.css'))
            .pipe(gulpIf(args.production === true, cleanCss({
                keepSpecialComments: 0
            })))
            .pipe(gulp.dest(config.styles.build.dest))
            .pipe(plumber.stop())
    })

    gulp.task('styles', false, (callback) => {
        runSequence('styles:lint', 'styles:process', 'styles:build', callback)
    })
}

module.exports = Styles
