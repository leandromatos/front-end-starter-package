import Resize from '../utils/resize'

class Content {
    constructor() {
        const resize = new Resize()
        resize.watch(this.resize)
    }

    resize() {
        console.log('Content resize')
    }
}

export default Content
