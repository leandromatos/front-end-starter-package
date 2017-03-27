let gulp = require('gulp')
let notify = require('gulp-notify')

let NotifySuccess = (title = 'High five', message = 'All default tasks have been completed!', sound = 'Glass') => {
    notify({
        title: title,
        message: message,
        sound: sound,
        icon: null
    }).write('./')
}

module.exports = NotifySuccess
