Utils.prototype.device = function() {
    this.device.__constructor = function() {
        return window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/\"/g, '').replace(/'/g, '');
    };

    return this.device.__constructor();
};
