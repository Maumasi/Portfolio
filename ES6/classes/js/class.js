'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

  // Abstract class for a person
  var Person = function () {
    // initializing function
    function Person(props) {
      _classCallCheck(this, Person);

      // destruct props
      var name = props.name,
          age = props.age,
          weight = props.weight,
          height = props.height,
          energyLevel = props.energyLevel;
      // pass values to class propeties or set to a default value

      this.name = name || 'John Doe';
      this.age = age || 25;
      // weight in lbs
      this.weight = weight || 185;
      // height in inches
      this.height = height || 68;
      // on a 100% scale
      this.energyLevel = energyLevel || 100;
    }

    // class method


    _createClass(Person, [{
      key: 'eat',
      value: function eat(food) {
        // destruct food properties
        var gramsOfFat = food.gramsOfFat,
            energize = food.energize;
        // number of grams in 1 pound

        var pound = 454;
        var energyAdjust = 100;
        var quarter = 0.25;
        // convert grams to pounds
        var gramsToPounds = gramsOfFat / pound;
        // energy adjustments
        var slowedMotabolizom = gramsToPounds * quarter;
        var energyLevelEffect = energize / energyAdjust - slowedMotabolizom * energyAdjust;
        // overide class properties
        this.weight += gramsToPounds;
        this.energyLevel += energyLevelEffect;
      }
    }]);

    return Person;
  }();

  // Concrete class
  // extend the parent class to the child class


  var Developer = function (_Person) {
    _inherits(Developer, _Person);

    function Developer(props) {
      _classCallCheck(this, Developer);

      var _this = _possibleConstructorReturn(this, (Developer.__proto__ || Object.getPrototypeOf(Developer)).call(this, props));

      var positionTitle = props.positionTitle;

      _this.positionTitle = positionTitle || 'Engineer';
      return _this;
    }

    _createClass(Developer, [{
      key: 'develope',
      value: function develope(script) {
        return 'Just building Skynet using ' + script + '. Muhahaaaa!!!!';
      }
    }]);

    return Developer;
  }(Person);

  // propeties to overide class defaults


  var liuProps = {
    name: 'Liu Maumasi',
    age: 32
  };

  // instantiate a new instance of the Developer class with new properties
  var liu = new Developer(liuProps);

  // print defaul properties to the conslo as well as the new properties
  console.log(liu.name);
  console.log(liu.age);
  console.log(liu.weight);
  console.log(liu.height);
  console.log(liu.energyLevel);
  console.log('=================');

  // make a cheese burger
  var cheeseBurger = {
    gramsOfFat: 400,
    energize: 0
  };

  // call eat method on cheese burger
  liu.eat(cheeseBurger);

  // print updated properties
  console.log(liu.weight);
  console.log(liu.energyLevel);
  console.log(liu.develope('ES6'));
})();