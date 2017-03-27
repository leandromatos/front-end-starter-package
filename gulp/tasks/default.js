let gulp = require('gulp-help')(require('gulp'))
let runSequence = require('run-sequence').use(gulp)

let Default = (config, args, log, error, success) => {
    gulp.task('default', 'Run all tasks.', (callback) => {
        runSequence('cleaning', 'fonts', 'images', 'files', 'scripts', 'styles', 'views', success)
        callback()
    })
}

module.exports = Default
