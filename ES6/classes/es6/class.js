
(() => {

  // Abstract class for a person
  class Person {
    // initializing function
    constructor(props) {
      // destruct props
      const {
        name,
        age,
        weight,
        height,
        energyLevel,
      } = props;
      // pass values to class propeties or set to a default value
      this.name = name || 'John Doe';
      this.age = age || 25;
      // weight in lbs
      this.weight = weight || 185;
      // height in inches
      this.height = height || 68;
      // on a 100% scale
      this.energyLevel = energyLevel || 100
    }

    // class method
    eat(food) {
      // destruct food properties
      const {
        gramsOfFat,
        energize,
      } = food;
      // number of grams in 1 pound
      const pound = 454;
      const energyAdjust = 100;
      const quarter = 0.25;
      // convert grams to pounds
      const gramsToPounds = gramsOfFat / pound;
      // energy adjustments
      const slowedMotabolizom = (gramsToPounds * quarter);
      const energyLevelEffect = (energize / energyAdjust) - (slowedMotabolizom * energyAdjust);
      // overide class properties
      this.weight += gramsToPounds;
      this.energyLevel += energyLevelEffect;
    }
  }

  // Concrete class
  // extend the parent class to the child class
  class Developer extends Person  {
    constructor(props) {
      super(props)
      const { positionTitle } = props;
      this.positionTitle = positionTitle || 'Engineer';
    }

    develope(script) {
      return `Just building Skynet using ${script}. Muhahaaaa!!!!`;
    }
  }

  // propeties to overide class defaults
  const liuProps = {
    name: 'Liu Maumasi',
    age: 32,
  }

  // instantiate a new instance of the Developer class with new properties
  const liu = new Developer(liuProps);

  // print defaul properties to the conslo as well as the new properties
  console.log(liu.name);
  console.log(liu.age);
  console.log(liu.weight);
  console.log(liu.height);
  console.log(liu.energyLevel);
  console.log('=================');

  // make a cheese burger
  const cheeseBurger = {
    gramsOfFat: 400,
    energize: 0,
  };

  // call eat method on cheese burger
  liu.eat(cheeseBurger);

  // print updated properties
  console.log(liu.weight);
  console.log(liu.energyLevel);
  console.log(liu.develope('ES6'));
})();
