cordova.define("cordova.plugin.hypertrack.HyperTrackWrapper", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'HyperTrackWrapper', 'coolMethod', [arg0]);
};

});
