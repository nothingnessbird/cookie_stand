'use strict';

var stores = [];

function Store(address,hours,minCustHour,maxCustHour,avgSale,cookieHour,hourArray){
  this.address = address;
  this.hours = hours;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgSale = avgSale;
  this.cookieHour = cookieHour;
  this.hourArray = hourArray;

  this.perHourCalc = function() {
    var perHourRand = Math.floor((Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour) * this.avgSale);
    return perHourRand;
  };

  this.hourMaker = function() {
    var time = 0;
    for (var i = 0; i < (this.hours[1] - this.hours[0]);i++) {
      time = [i + this.hours[0]];
      if (time < 12) {
        time.push('am');
      } else {
        time.push('pm');
      }
      time[0] = ((time[0] + 11) % 12 + 1);
      time = time[0] + time[1] + ': ';
      this.hourArray.push(time);
    }
  };

  this.dayTotalCalc = function() {
    var dayTotal = 0;
    this.hourMaker();
    this.cookieHour = [];
    this.dayTotal = 0;
    for (var i = 0; i < (this.hours[1] - this.hours[0]); i++) {
      var cookies = this.perHourCalc();
      this.cookieHour.push(cookies);
      dayTotal += cookies;
    }
    this.hourArray.push('Total: ');
    this.cookieHour.push(dayTotal);
  };

  this.dayTotalCalc();

  stores.push(this);
};

var addStores = [['pike','1st and Pike',[6,20],23,65,6.3],['seaTac','SeaTac',[6,20],3,24,1.2],['seattleCenter','Seattle Center',[6,20],11,38,3.7],['capHill','Capitol Hill',[6,20],20,38,2.3],['alki','Alki',[6,20],2,16,4.6],];

var storeMaker = function(name,address,hours,minCustHour,maxCustHour,avgSale){
  for (var i = 0; i < addStores.length; i++) {
    var newStore = addStores[i][0];
    var newStore = new Store(addStores[i][1],addStores[i][2],addStores[i][3],addStores[i][4],addStores[i][5],[],[]);
  }
};

storeMaker();

var hourHeader = function(){
  var longestHours = 0;
  var thisStore = 0;
  for (var i = 0; i < stores.length; i++) {
    var theseHours = stores[i].hours[1] - stores[i].hours[0];
    if (theseHours > longestHours) {
      thisStore = i;
    }
  }
  return stores[thisStore];
};

var storeTableDiv = document.getElementById('storeDiv');
var storeTable = document.createElement('table');
var storeTableHeader = document.createElement('thead');
var storeTableBody = document.createElement('tbody');
var storeTableFooter = document.createElement('tfoot');
// var headerHours = [];
// headerHours.push(hourHeader().hourArray)

// for (var n = 0; n < stores.length; n++) {
//   var storeInfo = document.getElementById('storeDiv');
//   var storeName = document.createElement('h2');
//   storeName.innerHTML = stores[n].address;
//   storeInfo.appendChild(storeName);
//   var cookieSales = document.createElement('ul');
//   storeInfo.appendChild(cookieSales);
//   for (var i = 0; i < stores[n].hourArray.length; i++) {
//     var hourInfo = document.createElement('li');
//     hourInfo.id = 'hourInfo';
//     hourInfo.innerHTML = stores[n].hourArray[i] + stores[n].cookieHour[i] + ' cookies';
//     cookieSales.appendChild(hourInfo);
//   }
// }
