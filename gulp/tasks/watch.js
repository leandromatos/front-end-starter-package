let gulp = require('gulp')

let Watch = (config, args, log, error, success) => {

    gulp.task('watch', () => {
        gulp.watch('./src/scripts/**/*.{js,vue}', ['scripts'])
        gulp.watch('./src/styles/**/*.scss', ['styles'])
        gulp.watch('./src/views/**/*.{pug,json}', ['views'])
    })

}

module.exports = Watch
