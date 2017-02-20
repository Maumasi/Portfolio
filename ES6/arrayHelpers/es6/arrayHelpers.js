(() => {

  // HTML elements
  const select = document.getElementById('catagories');
  const forEachList = document.getElementById('forEach-list');
  const filterInStockList = document.getElementById('filter-in-stock-list');
  const filterOutOfStockList = document.getElementById('filter-out-of-stock-list');
  const forEachItemCollection = forEachList.getElementsByTagName('li');

  // example arrays
  const forEachItems = HTMLCollectionToArray(forEachItemCollection);
  const inventory = [
    { department: 'sports', item: 'Soccor ball', stockQty: 12 },
    { department: 'jewelry', item: 'Diamond ring', stockQty: 3 },
    { department: 'home', item: 'Shower curtains', stockQty: 0 },
    { department: 'produce', item: 'Banana', stockQty: 0 },
    { department: 'toys', item: 'RC car', stockQty: 4 },
  ];

  const customers = [
    { id: 1, table: 12, order: [1, 3, 6] },
    { id: 2, table: 4, order: [7, 2, 4] },
  ];
  const menu = [
    { id: 1, price: 0.99, item: 'coffee' },
    { id: 2, price: 3.49, item: 'pancakes' },
    { id: 3, price: 1.99, item: 'fruit bowl' },
    { id: 4, price: 5.99, item: 'omelet' },
    { id: 5, price: 1.99, item: 'eggs and ham' },
    { id: 6, price: 1.99, item: 'biscuits and gravy' },
    { id: 7, price: 0.0, item: 'water' },
  ];

  const employee1 = [
    { status: 1, tast: 'do the dishes' },
    { status: 1, tast: 'clean the counters' },
    { status: 1, tast: 'mop the floors' },
  ];

  const employee2 = [
    { status: 1, tast: 'do the dishes' },
    { status: 1, tast: 'clean the counters' },
    { status: 0, tast: 'mop the floors' },
  ];

  const employee3 = [
    { status: 0, tast: 'do the dishes' },
    { status: 0, tast: 'clean the counters' },
    { status: 0, tast: 'mop the floors' },
  ];

  // ====================== map example ========================================
  // pluck the department value from each object in the array to make a new array
  const catagories = inventory.map((catagory) => {
    return catagory.department;
  });
  // for each element in the array capitalize it and set it as an option in the select tag
  catagories.forEach((catagory) => {
    const value = catagory;
    const option = capitalize(catagory);
    select.innerHTML += optionTag(option, value);
  })

  // ====================== forEach example ====================================
  // add a <p> to every <li> stating what position it's index it's in
  forEachItems.forEach((item) => {
    const position = forEachItems.indexOf(item);
    item.innerHTML = pTag(`This list item is in index position ${position}`);
  });

  // ====================== filter example =====================================
  // filter items that are in stock
  const inStock = inventory.filter((item) => {
    return item.stockQty;
  });
  // filter items that are out of stock
  const outOfStock = inventory.filter((item) => {
    return !item.stockQty;
  });
  // append each item with a statement to it's respective <ul>
  stockList(inStock, filterInStockList);
  stockList(outOfStock, filterOutOfStockList);

  // ====================== find example =======================================
  function getTableOrder(tableNumber) {
    // find customer by table
    const table = customers.find((customer) => {
      return customer.table === tableNumber;
    });
    // make array of ordered items customer ordered
    return table.order.map((order) => {
      return menu.find((item) => {
        return order === item.id;
      });
    });
  }
  // print out an array of ordered item objects by table
  console.log(getTableOrder(4));

  // use reduce to get the total price for the table's bill
  const tableOrder = getTableOrder(4);
  const bill = tableOrder.reduce((total, order) => {
    return total += order.price;
  }, 0);
  // print out the total bill brfore tax
  console.log(bill);

  // ====================== every & some example ===============================
  function employeeCheckListResponse(taskArray) {
    let response;
    // check if all tasks have a status code of 1
    const allTasks = taskArray.every((task) => {
      return task.status;
    });
    // check if some tasks have a status code of 1
    const someTasks = taskArray.some((task) => {
      return task.status;
    });

    if(allTasks) {
      response = 'All done for the day!';
    } else if(someTasks) {
      response = 'Just a few things left!';
    } else {
      response = 'I haven\'t started yet'
    }
    return response;
  }

  console.log(employeeCheckListResponse(employee1));
  console.log(employeeCheckListResponse(employee2));
  console.log(employeeCheckListResponse(employee3));


  // ====================== functions to aid in demo ===========================
  // wrap string in an HTML <p>
  function pTag (text) {
    return `<p>${text}</p>`;
  }

  // wrap string in an HTML <option> for <select> children
  function optionTag(option, value) {
    return `<option value="${value}">${option}</option>`
  }

  // wrap string in an HTML <option> for <select> children
  function liTag(item) {
    return `<li>${item}</li>`;
  }

  // turn an HTMLCollection from array-like to an actual array object
  function HTMLCollectionToArray(collection) {
    return [...collection];
  }

  // capitalize the first letter in the string
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // return an array of unique elements
  function unique(array) {
    let refArray = [];
    array.forEach((element) => {
      if(refArray.indexOf(element) === -1) {
        refArray.push(element);
      }
    });
    return refArray;
  }

  // for each element in the array make a <li> for it and append it to the <ul>
  function stockList(array, ulElement) {
    array.forEach((object) => {
      const { department, item, stockQty } = object;
      let templateStringItem = ``;
      let outOfStockItem = item;
      if(stockQty) {
        templateStringItem = `${capitalize(item)} can be found in the ${department} department`;
      } else {
        // make item plural if not already plural
        if(item.slice(-1) !== 's') {
          outOfStockItem = item + 's';
        }
        templateStringItem = `Sorry, ${outOfStockItem} are out of stock. See the ${department} department when this will be back in stock.`;
      }
      ulElement.innerHTML += liTag(templateStringItem);
    });
  }

})();
