
*[back to root directory](https://github.com/Maumasi/Portfolio/tree/master)*

# ES6: Classes
Here is a simple example of two ES6 classes. <br>
In this example `Person` is the *Abstract Class* and `Developer` is the *Concrete Class*.

- [How to read this example](#user-content-how-to-read-this-example)
- [ES6: Class code](#user-content-es6-class-code)
- [Using Gulp with ES6](#user-content-using-gulp-with-es6)

---

<br>

## How to read this example
Treat this example as if this directory is the root. The only exception to treating this as the root are the `gulpfile.js` paths, as the `gulpfile.js` provides automation for all programing examples in this Portfolio.
---
<br>


## ES6: Class code
[`/es6/class.js`](https://github.com/Maumasi/Portfolio/blob/master/ES6/classes/es6/class.js) <br>

Here `Person` is used as an Abstract class to have some of the minimum properties and methods all people will have in this program. The Concrete class, `Developer` inherits all of `Person`'s members by using the `extends` reserved word when building the `Developer` class.

```Javascript
// abstract class
class Person {
    // initializing function
    constructor(props) {
      /*
        pass in props to assign it's values to Person() properties
        example:
        this.name = props.name || 'T1000'
      */
    }

    // class method
    talk() {
      return 'who is Eddie Van Halen?';
    }
  }

// concrete class
// extend all members from Person()
class Developer extends Person  {
    constructor(props) {
      super(props)
    }
  }
```
---
<br>

## Using Gulp with ES6
[click here to learn how to install gulp.js](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

Gulp.js is a great development tool that is easy to learn and implement. <br>

In this gulp example the ES6 file is being translated into ES5 Javascript then that ES5 file is being minified and that minified file is what is being requested in the index.html. The ES6 script is not immediately being minified after being translated just so we can have a chance to comb through it if it happens to contain an error after being translated to ES5. The ES5 file name will be the same name as the ES6 source file.
<br>

To use gulp you'll need Node installed and an up to date NPM. [Click here to install Node](https://nodejs.org/en/)<br>
The following gulpfile needs the following dev installs:
```bash
$ npm install --save-dev gulp-babel babel-preset-es2015 gulp-uglify
```
<br>

[gulpfile.js](https://github.com/Maumasi/Portfolio/blob/master/gulpfile.js)
```Javascript
// gulpfile.js

const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// compile ES6 to legacy Javascript
gulp.task('compileES6', () => {
  return gulp.src(['./ES6/classes/es6/*.js'])
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('./ES6/classes/es6/compiledES6'))
});

// uglify the compiled ES6
// This gives us a chance to make changes to the compiled ES6 if we need to
gulp.task('compressJS', function () {
  return gulp.src('./ES6/classes/es6/compiledES6/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./ES6/classes/js'));
});

// watch for sass file changes on save
// If there are any changes on save, run this array of gulp tasks
gulp.task('watch', () => {
  gulp.watch('ES6/classes/es6/*.js', ['compileES6', 'compressJS']);
});

```
<br>

To run this script, enter the following command in the terminal:
```bash
$ gulp watch
```
### **Note**:
For this command to execute, `gulp` must be installed globally to use the `gulp` command.
