let gulp = require('gulp-help')(require('gulp'))
let data = require('gulp-data')
let fs = require('fs')
let gulpIf = require('gulp-if')
let inlineCss = require('gulp-inline-css')
let inlineSource = require('gulp-inline-source')
let log = require('../log/log.js')
let notifyError = require('../notify/error.js')
let plumber = require('gulp-plumber')
let pug = require('gulp-pug')
let runSequence = require('run-sequence')
let htmlBeautify = require('gulp-html-beautify')

let Views = (config, args, log, error, success) => {
    gulp.task('views:process', false, () => {
        return gulp.src(config.views.process.src)
            .pipe(plumber({
                errorHandler: notifyError
            }))
            .pipe(log({
                header: 'Compile views:'
            }))
            .pipe(data((file) => {
                return JSON.parse(fs.readFileSync(config.views.process.data))
            }))
            .pipe(pug({
                pretty: (args.production === true ? false : true)
            }))
            .pipe(gulp.dest(config.views.process.dest))
            .pipe(plumber.stop())
    })

    gulp.task('views:build', false, () => {
        return gulp.src(config.views.build.src)
            .pipe(plumber({
                errorHandler: notifyError
            }))
            .pipe(log({
                header: 'Build views:'
            }))
            .pipe(inlineSource())
            .pipe(gulpIf(args.production === false, htmlBeautify()))
            .pipe(gulp.dest(config.views.process.dest))
            .pipe(plumber.stop())
    })

    gulp.task('views', false, (callback) => {
        runSequence('views:process', 'views:build', callback)
    })

}

module.exports = Views
