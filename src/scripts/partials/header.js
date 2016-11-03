Partials.prototype.header = function() {
    var self = this;

    self.header.__constructor = function() {
        self.header.resize();

        Utils.resize.watch(self.header.resize);
    };

    self.header.resize = function() {};

    self.header.__constructor();
};
