cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-marketingcloudsdk.MCCordovaPlugin",
      "file": "plugins/cordova-plugin-marketingcloudsdk/www/MCCordovaPlugin.js",
      "pluginId": "cordova-plugin-marketingcloudsdk",
      "clobbers": [
        "MCCordovaPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-marketingcloudsdk": "7.1.0",
    "cordova-plugin-whitelist": "1.3.4"
  };
});