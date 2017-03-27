let gulp = require('gulp-help')(require('gulp'))
let plumber = require('gulp-plumber')
let log = require('../log/log.js')
let notifyError = require('../notify/error.js')

let Fonts = (config, args, log, error, success) => {

    gulp.task('fonts', false, () => {
        return gulp.src(config.fonts.src)
            .pipe(plumber({
                errorHandler: notifyError
            }))
            .pipe(log({
                header: 'Copy fonts:'
            }))
            .pipe(gulp.dest(config.fonts.dest))
            .pipe(plumber.stop())
    })

}

module.exports = Fonts
