let gulp = require('gulp')
let notify = require('gulp-notify')

let NotifySuccess = () => {
    notify({
        title: 'High five',
        message: 'Default tasks completed!',
        sound: 'Glass',
        icon: null
    }).write('./')
}

module.exports = NotifySuccess
