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
      time = time[0] + time[1];
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
    this.cookieHour.push(dayTotal);
  };

  this.dayTotalCalc();

  stores.push(this);

  this.render = function(){
    var storeTableRow = document.createElement('tr');
    var storeTableName = document.createElement('th');
    storeTableName.innerHTML = this.address;
    storeTableRow.appendChild(storeTableName);
    for (var n = 0; n < this.cookieHour.length; n++) {
      var storeTableSales = document.createElement('td');
      storeTableSales.innerHTML = this.cookieHour[n];
      storeTableRow.appendChild(storeTableSales);
    }
    storeTableBody.appendChild(storeTableRow);
  };
};

var addStores = [['pike','1st and Pike',[6,20],23,65,6.3],['seaTac','SeaTac',[6,20],3,24,1.2],['seattleCenter','Seattle Center',[6,20],11,38,3.7],['capHill','Capitol Hill',[6,20],20,38,2.3],['alki','Alki',[6,20],2,16,4.6]];

var storeMaker = function(name,address,hours,minCustHour,maxCustHour,avgSale){
  for (var i = 0; i < addStores.length; i++) {
    var newStore = new Store(addStores[i][1],addStores[i][2],addStores[i][3],addStores[i][4],addStores[i][5],[],[]);
  }
};

storeMaker();

var hourHeaderArray = [];
var thisStore = 0;

var hourHeader = function(){
  var longestHours = 0;
  for (var i = 0; i < stores.length; i++) {
    var theseHours = stores[i].hours[1] - stores[i].hours[0];
    if (theseHours > longestHours) {
      longestHours = theseHours;
      thisStore = i;
    }
  }
  for (var i = 0; i < stores[thisStore].hourArray.length; i++) {
    hourHeaderArray.push(stores[thisStore].hourArray[i]);
  }
  hourHeaderArray.push('Daily Location Total');
  hourHeaderArray.unshift('');
};

hourHeader();

var theForm = document.createElement('form');
theForm.id = 'form';
document.body.appendChild(theForm);
var formHeader = document.createElement('h2');
formHeader.innerHTML = 'Add a new store:';
theForm.appendChild(formHeader);
var formList = document.createElement('ul');
theForm.appendChild(formList);

var storeAddressField = document.createElement('li');
formList.appendChild(storeAddressField);
var storeMinCustField = document.createElement('li');
formList.appendChild(storeMinCustField);
var storeMaxCustField = document.createElement('li');
formList.appendChild(storeMaxCustField);
var storeAvgSaleField = document.createElement('li');
formList.appendChild(storeAvgSaleField);

var addressLabel = document.createElement('label');
addressLabel.htmlFor = 'address';
addressLabel.innerHTML = 'Enter the store location:';
var storeAddress = document.createElement('input');
storeAddress.type = 'text';
storeAddress.setAttribute('name','address');
storeAddress.setAttribute('placeholder','location');
storeAddress.setAttribute('required',true);
storeAddressField.appendChild(addressLabel);
storeAddressField.appendChild(storeAddress);

var minCustLabel = document.createElement('label');
minCustLabel.htmlFor = 'minCust';
minCustLabel.innerHTML = 'Enter the estimated minimum number of customers per hour:';
var storeMinCust = document.createElement('input');
storeMinCust.type = 'number';
storeMinCust.setAttribute('name','minCust');
storeMinCust.setAttribute('placeholder','min. customers/hour');
storeMinCust.setAttribute('required',true);
storeMinCustField.appendChild(minCustLabel);
storeMinCustField.appendChild(storeMinCust);

var maxCustLabel = document.createElement('label');
maxCustLabel.htmlFor = 'maxCust';
maxCustLabel.innerHTML = 'Enter the estimated maximum number of customers per hour:';
var storeMaxCust = document.createElement('input');
storeMaxCust.type = 'number';
storeMaxCust.setAttribute('name','maxCust');
storeMaxCust.setAttribute('placeholder','max. customers/hour');
storeMaxCust.setAttribute('required',true);
storeMaxCustField.appendChild(maxCustLabel);
storeMaxCustField.appendChild(storeMaxCust);

var avgSaleLabel = document.createElement('label');
avgSaleLabel.htmlFor = 'avgSale';
avgSaleLabel.innerHTML = 'Enter the average number of cookies per sale:';
var storeAvgSale = document.createElement('input');
storeAvgSale.type = 'number';
storeAvgSale.setAttribute('name','avgSale');
storeAvgSale.setAttribute('step','0.1');
storeAvgSale.setAttribute('placeholder','avg cookies/sale');
storeAvgSale.setAttribute('required',true);
storeAvgSaleField.appendChild(avgSaleLabel);
storeAvgSaleField.appendChild(storeAvgSale);

var submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.setAttribute('value','Add Store!');
submitButton.id = 'submit';
formList.appendChild(submitButton);

var storeTableDiv = document.getElementById('storeDiv');
var storeTable = document.createElement('table');
var storeTableHeader = document.createElement('thead');
var storeTableBody = document.createElement('tbody');
var storeTableFooter = document.createElement('tfoot');
storeTableFooter.id = 'storeTableFooter';
var footerRow = document.createElement('tr');
footerRow.id = 'footerRow';
storeTableDiv.appendChild(storeTable);

function harvestStore(event){
  event.preventDefault();
  var newStoreAddress = this.elements['address'].value;
  var newStoreHours = [6,20];
  var newStoreMinCust = parseInt(this.elements['minCust'].value);
  var newStoreMaxCust = parseInt(this.elements['maxCust'].value);
  var newStoreAvgSale = parseFloat(this.elements['avgSale'].value);
  var newStoreCookieHour = [];
  var newStoreHourArray = [];
  var addNewStore = new Store(newStoreAddress,newStoreHours,newStoreMinCust,newStoreMaxCust,newStoreAvgSale,newStoreCookieHour,newStoreHourArray);
  addNewStore.render();
  var element = document.getElementById('storeTableFooter');
  element.parentNode.removeChild(element);
  var storeTableFooter = document.createElement('tfoot');
  storeTableFooter.id = 'storeTableFooter';
  storeTable.appendChild(storeTableFooter);
  footerTotals();
  tableFooterMaker(storeTableFooter);
  this.reset();
}

var submitStore = document.getElementById('form').addEventListener('submit', harvestStore);

for (var i = 0; i < stores.length; i++) {
  stores[i].render();
};

storeTable.appendChild(storeTableHeader);
storeTable.appendChild(storeTableBody);
storeTable.appendChild(storeTableFooter);

var tableHeaderMaker = function() {
  for (var i = 0; i < hourHeaderArray.length; i++) {
    var headerInfo = document.createElement('th');
    headerInfo.innerHTML = hourHeaderArray[i];
    storeTableHeader.appendChild(headerInfo);
  }
};

var hourTotalArray = [];

var footerTotals = function(){
  var dayTotal = 0;
  hourTotalArray = [];
  for (var n = 0; n < stores[thisStore].cookieHour.length - 1; n++) {
    var hourTotal = 0;
    for (var i = 0; i < stores.length; i++) {
      hourTotal += stores[i].cookieHour[n];
    }
    dayTotal += hourTotal;
    hourTotalArray.push(hourTotal);
  }
  hourTotalArray.push(dayTotal);
  hourTotalArray.unshift('Totals');
};

var tableFooterMaker = function(storeTableFooter){
  footerRow = document.createElement('tr');
  storeTableFooter.appendChild(footerRow);
  for (var i = 0; i < hourTotalArray.length; i++) {
    var footerInfo = document.createElement('td');
    footerRow.appendChild(footerInfo);
    footerInfo.innerHTML = hourTotalArray[i];
  }
};

footerTotals();
tableHeaderMaker();
tableFooterMaker(storeTableFooter);
