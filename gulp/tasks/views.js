let gulp = require('gulp')
let plumber = require('gulp-plumber')
let data = require('gulp-data')
let pug = require('gulp-pug2')
let fs = require('fs')
let log = require('../log/log.js')
let gulpIf = require('gulp-if')
let notifyError = require('../notify/error.js')

let Views = (config, args, log, error, success) => {

    gulp.task('views', () => {
        return gulp.src(config.views.src)
            .pipe(plumber({
                errorHandler: notifyError
            }))
            .pipe(log({
                header: 'Compile views:'
            }))
            .pipe(data((file) => {
                return JSON.parse(fs.readFileSync(config.views.data))
            }))
            .pipe(gulpIf(args.production === true, pug({
                pretty: false
            }), pug({
                pretty: true
            })))
            .pipe(gulp.dest(config.views.dest))
            .pipe(plumber.stop())
    })

}

module.exports = Views
