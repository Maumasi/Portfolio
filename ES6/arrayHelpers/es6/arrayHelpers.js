(() => {

  // ====================== map example ====================================


  // ====================== forEach example ====================================
  const ul = document.getElementById('my-list');
  const liCollection = ul.getElementsByTagName('li');
  // turn the HTMLCollection from array-like to an actual array
  const li = HTMLCollectionToArray(liCollection);

  // add a <p> to every <li> telling what position it's index is 
  li.forEach((item) => {
    const position = li.indexOf(item);
    item.innerHTML = pTag(`This list item is in index position ${position}`);
  });


  // ====================== filter example ====================================


  // ====================== reduce example ====================================


  // ====================== find example ====================================


  // ====================== every example ====================================


  // ====================== some example ====================================


// ====================== functions ============================================
  function pTag (text) {
    return `<p>${text}</p>`;
  }

  function HTMLCollectionToArray(collection) {
    return [...collection];
  }

})();
