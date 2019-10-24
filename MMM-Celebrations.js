/* Magic Mirror
 * Module: MMM-Celebrations
 *
 * By lavolp3
 *
 */
Module.register("MMM-Celebrations", {

    // Module config defaults.
    defaults: {
        updateInterval: 20 * 1000,   // 60 seconds
        animationSpeed: 10,
        header: "HEUTE IST:",
        //initialLoadDelay: 875, // 0 seconds delay
        fadeSpeed: 7,
    },

    days: new Object({}),
    counter: 0,

    getStyles: function() {
        return ["MMM-Celebrations.css"];
    },

     /*getTranslations: function() {
        return {
            en: "translations/en.json",
            de: "translations/de.json",
            es: "translations/es.json",
            fr: "translations/fr.json",
            zh_cn: "translations/zh_cn.json",
            nl: "translations/nl.json",
            nb: "translations/nb.json",
            ar: "translations/ar.json"
        };
    },*/

    // Define start sequence.
    start: function() {
        Log.info("Starting module: " + this.name);
        // Set locale.
        this.config.lang = this.config.lang || config.language;
        this.sendSocketNotification("CONFIG", this.config);
        var self = this;
        setInterval(() => {
          self.updateDom();
          self.counter = (self.counter < self.days.length-1) ? self.counter + 1 : 0;
        }, self.config.updateInterval);
    },


    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.className = "wrapper";
        wrapper.style.width = this.config.width;

        if (!this.loaded) {
            wrapper.innerHTML = this.translate("Getting Celebrations");
            wrapper.className += "bright light small";
            return wrapper;
        }

        for (var i = 0; i < this.days.length; i ++) {
          var day = document.createElement("div");
          day.className = "bright light small cday";
          day.innerHTML = this.days[i].title;
          wrapper.appendChild(day);
          if (i == this.counter) {
            descr = document.createElement("div");
            descr.className = "descr xsmall";
            descr.innerHTML = this.days[i].text;
            wrapper.appendChild(descr);
          }
        }
        return wrapper;
    },


    socketNotificationReceived: function(notification, payload) {
        if (notification === "CELEBRATIONS") {
          this.loaded = true;
          this.days = payload;
          this.updateDom(this.config.animationSpeed);
        }
    },
});
