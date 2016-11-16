class Device {
    constructor() {}

    size() {
        return window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/\"/g, '').replace(/'/g, '')
    }
}

export default Device
