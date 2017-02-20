(() => {

  // HTML elements
  const select = document.getElementById('catagories');
  const forEachList = document.getElementById('forEach-list');
  const filterInStockList = document.getElementById('filter-in-stock-list');
  const filterOutOfStockList = document.getElementById('filter-out-of-stock-list');
  const forEachItemCollection = forEachList.getElementsByTagName('li');

  // example arrays
  // turn the HTMLCollection from array-like to an actual array
  const forEachItems = HTMLCollectionToArray(forEachItemCollection);
  const inventory = [
    { department: 'sports', item: 'Soccor ball', stockQty: 12 },
    { department: 'jewelry', item: 'Diamond ring', stockQty: 3 },
    { department: 'home', item: 'Shower curtains', stockQty: 0 },
    { department: 'produce', item: 'Banana', stockQty: 0 },
    { department: 'toys', item: 'RC car', stockQty: 4 },
  ];

  // ====================== map example ====================================
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

  // ====================== filter example ====================================
  const inStock = inventory.filter((item) => {
    return item.stockQty;
  });

  const outOfStock = inventory.filter((item) => {
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

  // 
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
