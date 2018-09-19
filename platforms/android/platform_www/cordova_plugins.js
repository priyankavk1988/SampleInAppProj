cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova.plugin.hypertrack.HyperTrackWrapper",
    "file": "plugins/cordova.plugin.hypertrack/www/HyperTrackWrapper.js",
    "pluginId": "cordova.plugin.hypertrack",
    "clobbers": [
      "cordova.plugins.HyperTrackWrapper"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova.plugin.hypertrack": "0.1.0"
};
// BOTTOM OF METADATA
});