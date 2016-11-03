Utils.prototype.resize = function() {
    var self = this;

    self.resize.__constructor = function() {
        self.resize.time = new Date(1, 1, 2000, 12);
        self.resize.timeout = false;
        self.resize.delta = 200;
        self.resize.start.callbacks = [];
        self.resize.watch.callbacks = [];
        $(window).resize(function(e) {
            self.resize.time = new Date();
            if (self.resize.timeout === false) {
                self.resize.timeout = true;
                self.resize.start();
                setTimeout(self.resize.watch, self.resize.delta);
            }
        });
    };

    self.resize.start = function(callback) {
        if (callback === undefined) {
            $('body').addClass('resize');
            $.each(self.resize.start.callbacks, function(i, callback) {
                callback();
            });
        } else {
            self.resize.start.callbacks.push(callback);
        }
    };

    self.resize.watch = function(callback) {
        if (callback === undefined) {
            if ((new Date() - self.resize.time) < self.resize.delta) {
                setTimeout(self.resize.watch, self.resize.delta);
            } else {
                $('body').removeClass('resize');
                self.resize.timeout = false;
                $.each(self.resize.watch.callbacks, function(i, callback) {
                    callback();
                });
            }
        } else {
            self.resize.watch.callbacks.push(callback);
        }
    };

    self.resize.__constructor();
};
