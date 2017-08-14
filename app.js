'use strict';

var stores = {
  store1: {
    location: '1st and Pike',
    hours: [6,20],
    minCustHour: 23,
    maxCustHour: 65,
    avgSale: 6.3,
    cookieHour: [],
    hourArray: [],
  },
  store2: {
    location: 'SeaTac Airport',
    hours: [6,20],
    minCustHour: 3,
    maxCustHour: 24,
    avgSale: 1.2,
    cookieHour: [],
    hourArray: [],
  },
  store3: {
    location: 'Seattle Center',
    hours: [6,20],
    minCustHour: 11,
    maxCustHour: 38,
    avgSale: 3.7,
    cookieHour: [],
    hourArray: [],
  },
  store4: {
    location: 'Capitol Hill',
    hours: [6,20],
    minCustHour: 20,
    maxCustHour: 38,
    avgSale: 2.3,
    cookieHour: [],
    hourArray: [],
  },
  store5: {
    location: 'Alki',
    hours: [6,20],
    minCustHour: 2,
    maxCustHour: 16,
    avgSale: 4.6,
    cookieHour: [],
    hourArray: [],
  },
  perHourCalc: function (store) {
    var perHourRand = Math.floor((Math.random() * (store.maxCustHour - store.minCustHour) + store.minCustHour) * store.avgSale);
    return perHourRand;
  },
  dayTotalCalc: function(store) {
    var dayTotal = 0;
    this.hourMaker(store);
    for (var i = 0; i < (store.hours[1] - store.hours[0]); i++) {
      var cookies = this.perHourCalc(store);
      store.cookieHour.push(cookies);
      dayTotal += cookies;
    }
    return dayTotal;
  },
  hourMaker: function(store) {
    var time = 0;
    for (var i = 0; i < (store.hours[1] - store.hours[0]); i++) {
      time = [i + store.hours[0]];
      if (time < 12) {
        time.push('am');
      } else {
        time.push('pm');
      }
      time[0] = ((time[0] + 11) % 12 + 1);
      time = time[0] + time[1] + ': ';
      store.hourArray.push(time);
    }
  },
};
var storeInfo = document.getElementById('storeInfo');
