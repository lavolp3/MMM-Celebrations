/* Magic Mirror
 * Module: MMM-Celebrations
 *
 * By lavolp3
 *
 */
 /*jshint esversion: 6 */

const NodeHelper = require('node_helper');
const request = require('request');
//const translate = require('@vitalets/google-translate-api');
const cheerio = require('cheerio');
const moment = require('moment');

module.exports = NodeHelper.create({

  start: function() {
      console.log("Starting module: " + this.name);
  },

  //Subclass socketNotificationReceived received.
  socketNotificationReceived: function(notification, payload) {
    if (notification === 'CONFIG') {
        this.config = payload;
        this.collectData();
        self = this;
        setInterval(function () {
            if (moment().hour() == 0 && moment().minute() < 20) { self.collectData(); }   // repeat only once a day!
        },  10 * 60 * 1000);
    }
  },

  collectData: function () {
    var day, descr;
    var celebrations = new Array();
    const url = "http://welcher-tag-ist-heute.org/";
    request(url, function (error, response, body) {
      var $ = cheerio.load(body);
      $('.slider .slides .inner a').each(async function(i, elm) {
        day = $('h2', elm).text().replace(/\t|\n/g,"");
        descr = $('p', elm).text().replace(/\t|\n/g,"");

        /*var res1 = await translate(day, {to: 'en', client: 'gtx'});
        day = res1.text;
        console.log(day+moment().format())

        var res2 = await translate(descr, {to: 'en', client: 'gtx'});
        descr = res2.text;
        console.log(descr+moment().format());*/

        celebrations.push({
          title: day,
          text: descr
        });
      });
      //console.log(celebrations);
      self.sendSocketNotification("CELEBRATIONS", celebrations);
    });
  }

});
