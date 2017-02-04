let gulp = require('gulp')
let plumber = require('gulp-plumber')
let gulpIf = require('gulp-if')
let imagemin = require('gulp-imagemin')
let log = require('../log/log.js')
let notifyError = require('../notify/error.js')

let Images = (config, args, log, error, success) => {

    gulp.task('images', () => {
        return gulp.src(config.images.src)
            .pipe(plumber({
                errorHandler: notifyError
            }))
            .pipe(log({
                header: 'Copy images:'
            }))
            .pipe(gulpIf(args.production === true, imagemin()))
            .pipe(gulp.dest(config.images.dest))
            .pipe(plumber.stop())
    })

}

module.exports = Images
