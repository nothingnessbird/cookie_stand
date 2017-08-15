'use strict';

var stores = [];

function Store(address,hours,minCustHour,maxCustHour,avgSale,cookieHour,hhourArray){
  this.address = address;
  this.hours = hours;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgSale = avgSale;
  this.cookieHour = cookieHour;
  this.hourArray = hourArray;

  this.perHourCalc = function(store) {
    var perHourRand = Math.floor((Math.random() * (store.maxCustHour - store.minCustHour) + store.minCustHour) * store.avgSale);
    return perHourRand;
  };

  this.hourMaker = function(store) {
    var time = 0;
    for (var i = 0; i < (store.hours[1] - store.hours[0]);i++) {
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
  };

  this.dayTotalCalc = function(store) {
    var dayTotal = 0;
    this.hourMaker(store);
    store.cookieHour = [];
    store.dayTotal = 0;
    for (var i = 0; i < (store.hours[1] - store.hours[0]); i++) {
      var cookies = this.perHourCalc(store);
      store.cookieHour.push(cookies);
      dayTotal += cookies;
    }
    store.hourArray.push('Total: ');
    store.cookieHour.push(dayTotal);
    return dayTotal;
  };

  stores.push(this);
};

var pike = new Store('1st and Pike',[6,20],23,65,6.3,[],[]);
var seaTac = new Store('SeaTac Airport',[6,20],3,24,1.2,[],[]);
var seattleCenter = new Store('Seattle Center',[6,20],11,38,3.7,[],[]);
var capHill = new Store('Capitol Hill',[6,20],20,38,2.3,[],[]);
var alki = new Store('Alki',[6,20],2,16,4.6,[],[]);
// var stores = {
//   store1: {
//     address: '1st and Pike',
//     hours: [6,20],
//     minCustHour: 23,
//     maxCustHour: 65,
//     avgSale: 6.3,
//     cookieHour: [],
//     hourArray: [],
//   },
//   store2: {
//     address: 'SeaTac Airport',
//     hours: [6,20],
//     minCustHour: 3,
//     maxCustHour: 24,
//     avgSale: 1.2,
//     cookieHour: [],
//     hourArray: [],
//   },
//   store3: {
//     address: 'Seattle Center',
//     hours: [6,20],
//     minCustHour: 11,
//     maxCustHour: 38,
//     avgSale: 3.7,
//     cookieHour: [],
//     hourArray: [],
//   },
//   store4: {
//     address: 'Capitol Hill',
//     hours: [6,20],
//     minCustHour: 20,
//     maxCustHour: 38,
//     avgSale: 2.3,
//     cookieHour: [],
//     hourArray: [],
//   },
//   store5: {
//     address: 'Alki',
//     hours: [6,20],
//     minCustHour: 2,
//     maxCustHour: 16,
//     avgSale: 4.6,
//     cookieHour: [],
//     hourArray: [],
//   },
  // perHourCalc: function (store) {
  //   var perHourRand = Math.floor((Math.random() * (store.maxCustHour - store.minCustHour) + store.minCustHour) * store.avgSale);
  //   return perHourRand;
  // },
  // dayTotalCalc: function(store) {
  //   var dayTotal = 0;
  //   this.hourMaker(store);
  //   store.cookieHour = [];
  //   store.dayTotal = 0;
  //   for (var i = 0; i < (store.hours[1] - store.hours[0]); i++) {
  //     var cookies = this.perHourCalc(store);
  //     store.cookieHour.push(cookies);
  //     dayTotal += cookies;
  //   }
  //   store.hourArray.push('Total: ');
  //   store.cookieHour.push(dayTotal);
  //   return dayTotal;
  // },
  // hourMaker: function(store) {
  //   var time = 0;
  //   for (var i = 0; i < (store.hours[1] - store.hours[0]); i++) {
  //     time = [i + store.hours[0]];
  //     if (time < 12) {
  //       time.push('am');
  //     } else {
  //       time.push('pm');
  //     }
  //     time[0] = ((time[0] + 11) % 12 + 1);
  //     time = time[0] + time[1] + ': ';
  //     store.hourArray.push(time);
  //   }
  // },
// };
// var keyArray = [stores.store1, stores.store2, stores.store3, stores.store4, stores.store5];
//
// for (var i = 0; i < keyArray.length; i++) {
//   stores.dayTotalCalc(keyArray[i]);
// }
//
// for (var n = 0; n < keyArray.length; n++) {
//   var storeInfo = document.getElementById('storeDiv');
//   var storeName = document.createElement('h2');
//   storeName.innerHTML = keyArray[n].address;
//   storeInfo.appendChild(storeName);
//   var cookieSales = document.createElement('ul');
//   storeInfo.appendChild(cookieSales);
//   for (var i = 0; i < keyArray[n].hourArray.length; i++) {
//     var hourInfo = document.createElement('li');
//     hourInfo.id = 'hourInfo';
//     hourInfo.innerHTML = keyArray[n].hourArray[i] + keyArray[n].cookieHour[i] + ' cookies';
//     cookieSales.appendChild(hourInfo);
//   }
// }
