import Resize from '../utils/resize'
import Device from '../utils/device'

class Header {
    constructor() {
        const resize = new Resize()
        resize.watch(this.resize)
    }

    resize() {
        const device = new Device()
        console.log('Device size:', device.size())
        console.log('Header resize')
    }
}

export default Header
