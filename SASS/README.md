
*[back to root directory](https://github.com/Maumasi/Portfolio/tree/master)*

# SASS: Imports, Mixins, and Vars, oh my!
There are a lot of things that can be covered with SASS. In this example of SASS code we will some of the fundamentals.

- [How to read this example](#user-content-how-to-read-this-example)
- [Imports](#user-content-imports)
- [Mixins](#user-content-mixins)

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

```Javascript
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

---
<br>

## Mixins
SASS gives us a few way to create dynamic styles. One of them is call a mixin. The way mixins are defined and called are very different based on what *flavor* of SASS you are using; `.sass` vs. `.scss`.
<br>

**SCSS**
```Javascript
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
```Javascript
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
