var gulp = require('gulp');
var del = require('del');

module.exports = function(config, args, log, error, success) {
    gulp.task('cleaning', function() {
        return del([
            './dist'
        ]);
    });
};
