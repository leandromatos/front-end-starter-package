class Resize {
    constructor() {
        this.time = new Date(1, 1, 2000, 12)
        this.timeout = false
        this.delta = 200
        this.callbacks = []
        $(window).resize(e => {
            this.time = new Date()
            if (this.timeout === false) {
                this.timeout = true
                this.start()
                setTimeout(() => {
                    this.watch()
                }, this.delta)
            }
        })
        $(window).resize()
    }

    start() {
        $('body').addClass('resize')
    }

    watch(callback) {
        if (callback === undefined) {
            if ((new Date() - this.time) < this.delta) {
                setTimeout(() => {
                    this.watch()
                }, this.delta)
            } else {
                $('body').removeClass('resize')
                this.timeout = false
                $.each(this.callbacks, (i, callback) => {
                    callback()
                });
            }
        } else {
            this.callbacks.push(callback)
        }
    }
}

export default Resize
