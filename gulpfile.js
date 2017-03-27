let gulp = require('gulp')
let glob = require('glob')
let minimist = require('minimist')
let runSequence = require('run-sequence').use(gulp)
let config = require('./gulp/config')
let log = require('./gulp/log/log')
let error = require('./gulp/notify/error')
let success = require('./gulp/notify/success')

let args = minimist(process.argv.slice(2))

process.env.NODE_ENV = args.production === true ? 'production' : 'development'

glob.sync('./gulp/tasks/*.js', {
    realpath: true
}).forEach((file) => {
    require(file)(config, args, log, error, success)
})
