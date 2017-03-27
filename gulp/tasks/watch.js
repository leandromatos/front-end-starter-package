let gulp = require('gulp')
let runSequence = require('run-sequence').use(gulp)

let Watch = (config, args, log, error, success) => {

    gulp.task('watch', 'Watch modified files.', (callback) => {
        gulp.watch('./src/scripts/**/*.{js,vue}', ['scripts'])
        gulp.watch('./src/styles/**/*.scss', ['styles'])
        gulp.watch('./src/views/**/*.{pug,json}', ['views'])

        success('Yuuuhul', 'Ready to watch!')
    })
}

module.exports = Watch
