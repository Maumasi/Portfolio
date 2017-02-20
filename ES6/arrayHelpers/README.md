*[back to root directory](https://github.com/Maumasi/Portfolio/tree/master)*

# ES6: Array Helpers

These array helpers have been drafted onto ES5 because of their common use from various JavaScript libraries but in ES6 these array helpers are now fully integrated and are now seeing more implementation. These helpers cut down the blocks of code normally seen in traditional for loops. They are not only more readable but also more maintainable over time.

---
<br>

## Index
- [Map]()
- [ForEach]()
- [Filter]()
- [Find]()
- [Reduce]()
- [Some and Every]()

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

Using the example array from before in the example below the `stockList()` function uses the `.forEach()` method to determine if an item in the array is in stock or out of stock and return a <li> with the appropriate response.
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
