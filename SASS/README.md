
*[back to root directory](https://github.com/Maumasi/Portfolio/tree/master)*

# SASS: Imports, Vars, Mixins, oh my!
There are a lot of things that can be covered with SASS. In this example of SASS code we will some of the fundamentals.

- [How to read this example](#user-content-how-to-read-this-example)
- [Imports](#user-content-imports)
- [Variables](#user-content-variables)
- [Mixins](#user-content-mixins)
- [Compile SASS with Gulp](#user-content-compile-sass-with-gulp)

---

<br>

## How to read this example
The examples below will explain a concept in SASS then present an example of code to show how to implement the concept.

---
<br>

## Imports
[styles.sass](https://github.com/Maumasi/Portfolio/blob/master/SASS/sass/styles.sass)
<br>

SASS uses `@import` to bring in styles. There is usually a single file that controls all imported files. Controlling the `@import` sequence is a good idea because if you're familiar with cascading styles in CSS you'll know that if you want to override a styling you have to declare it after the previous style to the given element. Keep in mind the this assumes that inheritance and specificity of the selector are not interfering with the cascading styles.
<br>

SASS files that are going to be imported must start with an `_` to tell SASS that this is an import file. An example of this would be `_base.sass` or `_reset.scss`
<br>

**Note:**
SASS does not care if you are mixing `.sass` and `.scss` files. both can be imported to the same file and it is still completely valid. this is great for front-end devs that are still learning SASS because they can just add an `s` to the beginning their CSS file extensions turning `.css` into `.scss` files. so they can still contribute with the rest of the front-end teams that are using SASS.

```Java
/* styles.sass */

// Google fonts
// ====================
@import url('https://fonts.googleapis.com/css?family=Droid+Serif|Oxygen')


// base styles
// ====================
@import './util/reset'
@import './util/base'


// mixins & vars
// ====================
@import "./util/var"
@import "./util/mixin"


// styles
// ====================
@import './page/home'
```
**Note:**
Notice that you can either use single quotes or double quotes with SASS. In both cases, `'./page/home'` and `"./page/home"` are treated as the same.

---
<br>

## Variables
[*_var.sass*](https://github.com/Maumasi/Portfolio/blob/master/SASS/sass/util/_var.sass)

In SASS, variables are declared using the `$`. One of the most practical uses of variables is to control styles that are intended to be global throughout your project such as logo colors, font styles, etc. SASS variables are treated like any other variables in any other language.
- To define a variable just start with a `$`. Example: `$myVar: 'Hello world'`.
Interpolating a variable into a style is pretty easy too. To interpolate a variable just wrap the variable with curly braces starting with a `#` like so, `#{ $var }`.

**Declaring a variable**
```Java
$white: rgba(255, 255, 255, 0.89)
$black: rgba(0, 0, 0, 0.89)

$blue: rgba(61, 90, 255, 1)
$green: rgba(57, 247, 43, 1)
$red: rgba(245, 0, 0, 1)
```
<br>

**Interpolating a variable**

```Java
$t = 'top'
$r = 'right'
$b = 'bottom'
$l = 'left'


// 12 unit grid offset
=colOffset($dir, $num)
  margin-#{$dir}: calc((100% / 12) * $num)

// offset div.bump to the left by 1/12th
div.bump
  +colOffset($l, 1)
```

---

## Mixins
[*_mixin.sass*](https://github.com/Maumasi/Portfolio/blob/master/SASS/sass/util/_mixin.sass)

SASS gives us a few way to create dynamic styles. One of them is called a *mixin*. Mixins often take in variables but they are not required to define a mixin. The way mixins are defined and called are very different based on what *flavor* of SASS you are using; `.sass` vs. `.scss`.
<br>

**SCSS**
SCSS uses curly brackets, `{}`, to define the scope of styles like you would normally with CSS.
```Java
// define the mixin
@mixin displayFont ($fontColor, $fontSize) {
  color: $fontColor;
  font-size: $fontSize;
  // this font was the first @import from Google fonts
  font-family: 'Droid Serif', serif;
}


h1 {
  // call the mixin
  @include displayFont(blue, 1.8rem);
}
```

**SASS**
SASS uses deliniation
```Java
// define the mixin
=displayFont ($fontColor, $fontSize)
  color: $fontColor;
  font-size: $fontSize;
  // this font was the first @import from Google fonts
  font-family: 'Droid Serif', serif;

h1
  // call the mixin
  +displayFont(blue, 1.8rem);
```
<br>

Mixins are extremely helpful when making media queries. Here is an example of one I often use when making media queries:
```Java
// media query call
=media($max)
  @media screen and (max-width: $max)
    @content
```
**Note:**
This example uses two directives in SASS, `@media` and `@content`. The two directives being utilized in this mixin will not be covered in this demo, but here are a couple short explanations:
- The `@media` directive tells SASS that this is a media query.
- The `@content` directive is a place holder for any styles you place under the `@media` in this example.

---
<br>

## Compile SASS with Gulp
[gulpfile.js](https://github.com/Maumasi/Portfolio/blob/master/gulpfile.js)

Gulp.js is a great development tool that is easy to learn and implement. <br>

In this gulp example the styles.sass is importing all SASS file styles in the order they were imported, translated from SASS into CSS. Gulp is telling to newly translated SASS to CSS to be written to the `SASS/css/` directory. The CSS file name will be the same name as the SASS source file.

To use gulp you'll need Node installed and an up to date NPM. [Click here to install Node](https://nodejs.org/en/)<br>
The following gulpfile needs the following dev installs:
```bash
$ npm install --save-dev gulp-sass
```
<br>

```Javascript
const gulp = require('gulp');
const sass = require('gulp-sass');


// compile SASS files
gulp.task('sass', () => {
  return gulp.src('./SASS/sass/styles.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./SASS/css/'));
});


// watch for sass file changes on save
gulp.task('watch', () => {
  gulp.watch('SASS/sass/styles.sass', ['sass']);
});
```
<br>

To run this script, enter the following command in the terminal:
```bash
$ gulp watch
```
### **Note**:
For this command to execute, `gulp` must be installed globally to use the `gulp` command.
