var gulp = require('gulp');

module.exports = function(config, args, log, error, success) {

    gulp.task('watch', function() {
        gulp.watch('./src/scripts/**/*.{js,vue}', ['scripts']);
        gulp.watch('./src/styles/**/*.scss', ['styles']);
        gulp.watch('./src/views/**/*.{jade,json}', ['views']);
    });

};
