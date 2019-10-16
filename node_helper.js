/* Magic Mirror
 * Module: MMM-Celebrations
 *
 * By lavolp3
 *
 */
 /*jshint esversion: 6 */

const NodeHelper = require('node_helper');
const request = require('request');
//const parser = require('xml2js').parseString;
//const translate = require('@vitalets/google-translate-api');

module.exports = NodeHelper.create({

  start: function() {
      console.log("Starting module: " + this.name);
  },

  calFile: `${__dirname}/feiertage.json`,



  //Subclass socketNotificationReceived received.
  socketNotificationReceived: function(notification, payload) {
    if (notification === 'CONFIG') {
        this.config = payload;
        this.collectData();
        self = this;
        setInterval(function () {
            self.collectData();
        }, payload.updateInterval);
    }
  },

  collectData: function () {
    today = moment().format("DD/MM");
    var fData = fs.readFileSync(this.calFile, "utf8");
    var cal = JSON.parse(fData);
    console.log(JSON.stringify(cal));
    var days = cal[today] || [];
    sendSocketNotification("DAYS", days);
  }

});
