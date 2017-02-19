'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {

  // ====================== map example ====================================


  // ====================== forEach example ====================================
  var ul = document.getElementById('my-list');
  var liCollection = ul.getElementsByTagName('li');
  // turn the HTMLCollection from array-like to an actual array
  var li = HTMLCollectionToArray(liCollection);

  // add a <p> to every <li> telling what position it's index is 
  li.forEach(function (item) {
    var position = li.indexOf(item);
    item.innerHTML = pTag('This list item is in index position ' + position);
  });

  // ====================== filter example ====================================


  // ====================== reduce example ====================================


  // ====================== find example ====================================


  // ====================== every example ====================================


  // ====================== some example ====================================


  // ====================== functions ============================================
  function pTag(text) {
    return '<p>' + text + '</p>';
  }

  function HTMLCollectionToArray(collection) {
    return [].concat(_toConsumableArray(collection));
  }
})();