var gulp = require('gulp')
var gutil = require('gulp-util')
var through = require('through2')

let Log = (data) => {
    console.log()
    if (data.header) {
        console.log(gutil.colors.yellow(data.header))
    }
    var count = 0
    return through.obj((file, encoding, callback) => {
        var items = []
        var path = file.path.replace(process.cwd() + '/', '')
        items.push(gutil.colors.green(path))
        console.log(items.join(''))
        count++
        return callback(null, file)
    }, (callback) => {
        if (!data.stylish) {
            console.log()
        }
        callback()
    })
}

module.exports = Log
