var gulp = require('gulp');
var plumber = require('gulp-plumber');
var data = require('gulp-data');
var jade = require('gulp-jade');
var fs = require('fs');
var log = require('../log/log.js');
var gulpIf = require('gulp-if');
var notifyError = require('../notify/error.js');

module.exports = function(config, args, log, error, success) {

    gulp.task('views', function() {
        return gulp.src(config.views.src)
            .pipe(plumber({
                errorHandler: notifyError
            }))
            .pipe(log({
                header: 'Compile views:'
            }))
            .pipe(data(function(file) {
                return JSON.parse(fs.readFileSync(config.views.data));
            }))
            .pipe(gulpIf(args.production === true, jade({
                pretty: false
            }), jade({
                pretty: true
            })))
            .pipe(gulp.dest(config.views.dest))
            .pipe(plumber.stop());
    });

};
