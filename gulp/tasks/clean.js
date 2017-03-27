let gulp = require('gulp-help')(require('gulp'))
let del = require('del')

let Clean = (config, args, log, error, success) => {
    gulp.task('cleaning', false, () => {
        return del(config.clean.src)
    })
}

module.exports = Clean
