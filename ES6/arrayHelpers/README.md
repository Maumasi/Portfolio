*[back to root directory](https://github.com/Maumasi/Portfolio/tree/master)*

# ES6: Array Helpers

These array helpers have been drafted onto ES5 because of their common use from various JavaScript libraries but in ES6 these array helpers are now fully integrated and are now seeing more implementation. These helpers cut down the blocks of code normally seen in traditional for loops. They are not only more readable but also more maintainable over time.

---
<br>

## Index
- [Map](#user-content-map)
- [ForEach](#user-content-foreach)
- [Filter](#user-content-filter)
- [Find](#user-content-find)
- [Reduce](#user-content)
- [Some and Every](#user-content-some-and-every)

---
<br>

## Map
Map is an array method that returns a value for every element in the array to create a new array. This is helpful when you need to *pluck* values from an array to perform some operation on them without mutating the original array.
<br>

**Note**
With the `map` method there needs to be something returned for every iteration through the array. If something is not returned because of some `if` statement then `undefined` will be returned and you don't want that. If you do need to filter through elements in the array then you should use the `.filter()` method or the `.forEach()` method.
<br>

Below is an example of an array of objects that you might get back from an API call to an in-house inventory system. the `.forEach()` method is used in the `unique()` function but we'll cover `.forEach()` next, so don't worry about it in here.

```JavaScript
// array of inventory item objects
const inventory = [
  { department: 'sports', item: 'Soccer ball', stockQty: 12 },
  { department: 'jewelry', item: 'Diamond ring', stockQty: 3 },
  { department: 'home', item: 'Shower curtains', stockQty: 0 },
  { department: 'produce', item: 'Banana', stockQty: 0 },
  { department: 'toys', item: 'RC car', stockQty: 4 },
];

// create an array of all the departments from the array
const departments = inventory.map((inventoryItem) => {
  return inventoryItem.department;
});

// function to prevent any duplicate element entries
function unique(array) {
  let refArray = [];
  array.forEach((element) => {
    if(refArray.indexOf(element) === -1) {
      refArray.push(element);
    }
  });
  return refArray;
}

// make an array where every element is different
const categories = unique(departments);
```
Now that there is an array of unique elements in a new array this can be used to create a dynamic `<select>` drop-down or a list of categories for for users to filter and brows through.

---
<br>

## ForEach
This array method is probably to most versatile of the array helper methods. The `.forEach()` method doesn't return anything but with this method any operations can be performed on an array element.
<br>

Using the example array from before in the example below the `stockList()` function uses the `.forEach()` method to determine if an item in the array is in stock or out of stock and return a `<li>` with the appropriate response.
```JavaScript
// array of inventory item objects
const inventory = [
  { department: 'sports', item: 'Soccer ball', stockQty: 12 },
  { department: 'jewelry', item: 'Diamond ring', stockQty: 3 },
  { department: 'home', item: 'Shower curtains', stockQty: 0 },
  { department: 'produce', item: 'Banana', stockQty: 0 },
  { department: 'toys', item: 'RC car', stockQty: 4 },
];

// create a <li> using ES6's new template string
function liTag(item) {
  return `<li>${item}</li>`;
}

// capitalize the first letter in the string
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// function to append a <li> to a specified <ul>
function stockList(array, ulElement) {
  array.forEach((object) => {
    // deconstruct properties from the array element
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
```
**Note** <br>
This is the only array method that does *NOT* require a `return`.

---
<br>

## Filter
Filter is a useful method to quickly sift through elements in an array to return only elements that match a conditional statement. Using an actual if statement to make a filter more verbose can also be done but it can make the block of code more complex to read than it needs to be.
<br>

Below is an example of the `.filter()` method in action. Using the `const inventory` from the first example we'll be making a couple new arrays. <br>

The `const inStock` is a new array using the `.filter()` method to look for items that have a `stockQty` property that is greater than `0`. Remember that `0` is treated as `false`.<br>

The `const outOfStock` is a new array using the `.filter()` method to look for items that have a `stockQty` property that is `0`. <br>
```JavaScript
const inventory = [
  { department: 'sports', item: 'Soccer ball', stockQty: 12 },
  { department: 'jewelry', item: 'Diamond ring', stockQty: 3 },
  { department: 'home', item: 'Shower curtains', stockQty: 0 },
  { department: 'produce', item: 'Banana', stockQty: 0 },
  { department: 'toys', item: 'RC car', stockQty: 4 },
];

// filter items that are in stock
const inStock = inventory.filter((item) => {
  return item.stockQty;
});

// filter items that are out of stock
const outOfStock = inventory.filter((item) => {
  return !item.stockQty;
});

console.log(inStock);
/*
logs:
[
  { department: 'sports', item: 'Soccer ball', stockQty: 12 },
  { department: 'jewelry', item: 'Diamond ring', stockQty: 3 },
  { department: 'toys', item: 'RC car', stockQty: 4 }
]
*/

console.log(outOfStock);
/*
logs:
[
  { department: 'home', item: 'Shower curtains', stockQty: 0 },
  { department: 'produce', item: 'Banana', stockQty: 0 },
]
*/
```

---
<br>

## Find

This array method returns an element that meets a conditional like the `.filter()` method above. The difference here is that this method will only return 1 element when the conditional is satisfied. Something to keep in mind is that if there are multiple elements in the array that meet the conditional statement the first one by order of index will be the one to be returned. It's worth noting that this will not return an array with a single element in it, but rather just the element it's self. <br>

In the example below is using a restaurant setting. <br>
The function uses the `.find()` method to look for a table number in the `const customers` array. Using the `.map()` method we create a new array of ordered menu items by finding every menu item by it's `id` property and return that new array from the function.

```JavaScript
const menu = [
  { id: 1, price: 0.99, item: 'coffee' },
  { id: 2, price: 3.49, item: 'pancakes' },
  { id: 3, price: 1.99, item: 'fruit bowl' },
  { id: 4, price: 5.99, item: 'omelet' },
  { id: 5, price: 1.99, item: 'eggs and ham' },
  { id: 6, price: 1.99, item: 'biscuits and gravy' },
  { id: 7, price: 0.0, item: 'water' },
];

const customers = [
  { id: 1, table: 12, order: [1, 3, 6] },
  { id: 2, table: 4, order: [7, 2, 4] },
];

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
// print out an array of ordered item objects for table number 4
console.log(getTableOrder(4));
```
**Note** <br>
Remember that the `.map()` method iterates over every element in the array, so even though the `.find()` method only returns only 1 element the `.map()` method is running the `.find()` method for every element in the `order` property which is an array.

---
<br>

## Reduce
Reduce is kind of a weird one. This array method takes 2 parameters:

- `param1`: initial value
- `param2`: array

The syntax looks a little different because you'll have to set the initial value as the second value after the callback function in the `.reduce()` method then set the variable name to `param1` in the callback function. So, It would look like this:
```JavaScript
array.reduce(callback(param1, arrayElement){ /* ...some logic... */ }, 0);
// --------------------------------------------------------------------^  param1 initial value
```
<br>

 The `param1` value is often set as `0` then incremented. Instead of incrementing `param1` for every element in the array, `param2`, we'll do something a little more practical. <br>

In the example below we'll use the function we made above, `getTableOrder()`, to generate an array of ordered items and set it to `const tableOrder`. Using this new array we'll add up this table's total bill before taxes using the `.reduce()` method and set it to `const bill`.
```JavaScript
const menu = [
  { id: 1, price: 0.99, item: 'coffee' },
  { id: 2, price: 3.49, item: 'pancakes' },
  { id: 3, price: 1.99, item: 'fruit bowl' },
  { id: 4, price: 5.99, item: 'omelet' },
  { id: 5, price: 1.99, item: 'eggs and ham' },
  { id: 6, price: 1.99, item: 'biscuits and gravy' },
  { id: 7, price: 0.0, item: 'water' },
];

const customers = [
  { id: 1, table: 12, order: [1, 3, 6] },
  { id: 2, table: 4, order: [7, 2, 4] },
];

// make array of ordered items for table 4
const tableOrder = getTableOrder(4);

// use reduce to get the total price for the table's bill
const bill = tableOrder.reduce((total, order) => {
  return total += order.price;
// set initial value as the second parameter after the callback function
}, 0);

// print out the total bill before tax
// logs: 9.48
console.log(bill);
```
