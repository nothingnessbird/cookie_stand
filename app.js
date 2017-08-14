'use strict';

var stores = {
  store1: {
    location: '1st and Pike',
    hours: [6,20],
    minCustHour: 23,
    maxCustHour: 65,
    avgSale: 6.3,
  },
  store2: {
    location: 'SeaTac Airport',
    hours: [6,20],
    minCustHour: 3,
    maxCustHour: 24,
    avgSale: 1.2,
  },
  store3: {
    location: 'Seattle Center',
    hours: [6,20],
    minCustHour: 11,
    maxCustHour: 38,
    avgSale: 3.7,
  },
  store4: {
    location: 'Capitol Hill',
    hours: [6,20],
    minCustHour: 20,
    maxCustHour: 38,
    avgSale: 2.3,
  },
  store5: {
    location: 'Alki',
    hours: [6,20],
    minCustHour: 2,
    maxCustHour: 16,
    avgSale: 4.6,
  },
  perHourCalc: function (maxCustHour,minCustHour) {
    var perHourRand = Math.floor(Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour);
    return perHourRand;
  },
  dayTotalCalc: function(perHourRand){
    var dayTotal = perHourRand * (this.hours[1] - this.hours[0]);
    return dayTotal;
  },
};
