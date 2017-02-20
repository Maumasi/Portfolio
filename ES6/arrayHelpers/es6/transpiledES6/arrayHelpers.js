'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {

  // HTML elements
  var select = document.getElementById('catagories');
  var forEachList = document.getElementById('forEach-list');
  var filterInStockList = document.getElementById('filter-in-stock-list');
  var filterOutOfStockList = document.getElementById('filter-out-of-stock-list');
  var forEachItemCollection = forEachList.getElementsByTagName('li');

  // example arrays
  // turn the HTMLCollection from array-like to an actual array
  var forEachItems = HTMLCollectionToArray(forEachItemCollection);
  var inventory = [{ department: 'sports', item: 'Soccor ball', stockQty: 12 }, { department: 'jewelry', item: 'Diamond ring', stockQty: 3 }, { department: 'home', item: 'Shower curtains', stockQty: 0 }, { department: 'produce', item: 'Banana', stockQty: 0 }, { department: 'toys', item: 'RC car', stockQty: 4 }];

  // ====================== map example ====================================
  // pluck the department value from each object in the array to make a new array
  var catagories = inventory.map(function (catagory) {
    return catagory.department;
  });
  // for each element in the array capitalize it and set it as an option in the select tag
  catagories.forEach(function (catagory) {
    var value = catagory;
    var option = capitalize(catagory);
    select.innerHTML += optionTag(option, value);
  });

  // ====================== forEach example ====================================
  // add a <p> to every <li> stating what position it's index it's in
  forEachItems.forEach(function (item) {
    var position = forEachItems.indexOf(item);
    item.innerHTML = pTag('This list item is in index position ' + position);
  });

  // ====================== filter example ====================================
  var inStock = inventory.filter(function (item) {
    return item.stockQty;
  });

  var outOfStock = inventory.filter(function (item) {
    return !item.stockQty;
  });

  stockList(inStock, filterInStockList);
  stockList(outOfStock, filterOutOfStockList);

  // ====================== reduce example ====================================


  // ====================== find example ====================================


  // ====================== every example ====================================


  // ====================== some example ====================================


  // ====================== functions ============================================
  // wrap string in an HTML <p>
  function pTag(text) {
    return '<p>' + text + '</p>';
  }

  // wrap string in an HTML <option> for <select> children
  function optionTag(option, value) {
    return '<option value="' + value + '">' + option + '</option>';
  }

  // wrap string in an HTML <option> for <select> children
  function liTag(item) {
    return '<li>' + item + '</li>';
  }

  // turn an HTMLCollection from array-like to an actual array object
  function HTMLCollectionToArray(collection) {
    return [].concat(_toConsumableArray(collection));
  }

  // capitalize the first letter in the string
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // 
  function stockList(array, ulElement) {
    array.forEach(function (object) {
      var department = object.department,
          item = object.item,
          stockQty = object.stockQty;

      var templateStringItem = '';
      var outOfStockItem = item;

      if (stockQty) {
        templateStringItem = capitalize(item) + ' can be found in the ' + department + ' department';
      } else {
        // make item plural if not already plural
        if (item.slice(-1) !== 's') {
          outOfStockItem = item + 's';
        }
        templateStringItem = 'Sorry, ' + outOfStockItem + ' are out of stock. See the ' + department + ' department when this will be back in stock.';
      }

      ulElement.innerHTML += liTag(templateStringItem);
    });
  }
})();