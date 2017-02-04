let notify = require('gulp-notify')

let NotifyError = (error) => {
    notify.onError({
        title: 'Task failed',
        message: error.message.split('\n\nStack Trace:\nundefined')[0],
        sound: 'Sosumi',
        icon: null
    })(error)

    this.emit('end')
}

module.exports = NotifyError
