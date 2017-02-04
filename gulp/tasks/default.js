let gulp = require('gulp')
let runSequence = require('run-sequence').use(gulp)

let Default = (config, args, log, error, success) => {
    gulp.task('default', (callback) => {
        runSequence('cleaning', 'fonts', 'images', 'scripts', 'styles', 'views', success)
        callback()
    })
}

module.exports = Default
