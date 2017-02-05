'use strict';

(function (global) {

  var options = global.mapOptions;
  // map canvas
  var mapElement = document.getElementById('map');
  var map = global.MapMethods.create(mapElement, options);

  console.log(map);
  map.zoom(10);
})(window);