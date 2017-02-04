let gulp = require('gulp')
let del = require('del')

let Clean = (config, args, log, error, success) => {
    gulp.task('cleaning', () => {
        return del(config.clean.src)
    })
}

module.exports = Clean
