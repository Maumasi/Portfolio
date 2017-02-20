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
  var forEachItems = HTMLCollectionToArray(forEachItemCollection);
  var inventory = [{ department: 'sports', item: 'Soccor ball', stockQty: 12 }, { department: 'jewelry', item: 'Diamond ring', stockQty: 3 }, { department: 'home', item: 'Shower curtains', stockQty: 0 }, { department: 'produce', item: 'Banana', stockQty: 0 }, { department: 'toys', item: 'RC car', stockQty: 4 }];

  var customers = [{ id: 1, table: 12, order: [1, 3, 6] }, { id: 2, table: 4, order: [7, 2, 4] }];
  var menu = [{ id: 1, price: 0.99, item: 'coffee' }, { id: 2, price: 3.49, item: 'pancakes' }, { id: 3, price: 1.99, item: 'fruit bowl' }, { id: 4, price: 5.99, item: 'omelet' }, { id: 5, price: 1.99, item: 'eggs and ham' }, { id: 6, price: 1.99, item: 'biscuits and gravy' }, { id: 7, price: 0, item: 'water' }];

  var employee1 = [{ status: 1, tast: 'do the dishes' }, { status: 1, tast: 'clean the counters' }, { status: 1, tast: 'mop the floors' }];

  var employee2 = [{ status: 1, tast: 'do the dishes' }, { status: 1, tast: 'clean the counters' }, { status: 0, tast: 'mop the floors' }];

  var employee3 = [{ status: 0, tast: 'do the dishes' }, { status: 0, tast: 'clean the counters' }, { status: 0, tast: 'mop the floors' }];

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
  // filter items that are in stock
  var inStock = inventory.filter(function (item) {
    return item.stockQty;
  });
  // filter items that are out of stock
  var outOfStock = inventory.filter(function (item) {
    return !item.stockQty;
  });
  // append each item with a statement to it's respective <ul>
  stockList(inStock, filterInStockList);
  stockList(outOfStock, filterOutOfStockList);

  // ====================== reduce example ====================================


  // ====================== find example ====================================
  function getTableOrder(tableNumber) {
    // find customer by table
    var table = customers.find(function (customer) {
      return customer.table === tableNumber;
    });
    // make array of ordered items customer ordered
    return table.order.map(function (order) {
      return menu.find(function (item) {
        return order === item.id;
      });
    });
  }
  // print out an array of ordered item objects by table
  console.log(getTableOrder(4));

  // ====================== every & some example ====================================
  function employeeCheckListResponse(taskArray) {
    var response = void 0;
    // check if all tasks have a status code of 1
    var allTasks = taskArray.every(function (task) {
      return task.status;
    });
    // check if some tasks have a status code of 1
    var someTasks = taskArray.some(function (task) {
      return task.status;
    });

    if (allTasks) {
      response = 'All done for the day!';
    } else if (someTasks) {
      response = 'Just a few things left!';
    } else {
      response = 'I haven\'t started yet';
    }
    return response;
  }

  console.log(employeeCheckListResponse(employee1));
  console.log(employeeCheckListResponse(employee2));
  console.log(employeeCheckListResponse(employee3));

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

  // return an array of unique elements
  function unique(array) {
    var refArray = [];
    array.forEach(function (element) {
      if (refArray.indexOf(element) === -1) {
        refArray.push(element);
      }
    });
    return refArray;
  }

  // for each element in the array make a <li> for it and append it to the <ul>
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