let gulp = require('gulp')
let gutil = require('gulp-util')
let through = require('through2')

let Log = (data) => {
    console.log()
    if (data.header) {
        console.log(gutil.colors.yellow(data.header))
    }
    let count = 0
    return through.obj((file, encoding, callback) => {
        let items = []
        let path = file.path.replace(process.cwd() + '/', '')
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
