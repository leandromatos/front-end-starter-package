let gulp = require('gulp-help')(require('gulp'))
let plumber = require('gulp-plumber')
let gulpIf = require('gulp-if')
let log = require('../log/log.js')
let notifyError = require('../notify/error.js')

let Files = (config, args, log, error, success) => {

    gulp.task('files', false, () => {
        return gulp.src(config.files.src)
            .pipe(plumber({
                errorHandler: notifyError
            }))
            .pipe(log({
                header: 'Copy files:'
            }))
            .pipe(gulp.dest(config.files.dest))
            .pipe(plumber.stop())
    })

}

module.exports = Files
