
*[back to root directory](https://github.com/Maumasi/Portfolio/tree/master)*

# SASS: Imports, Mixins, and Vars, oh my!
There are a lot of things that can be covered with SASS. In this example of SASS code we will some of the fundamentals.

- [How to read this example](#user-content-how-to-read-this-example)

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

```CSS
/* styles.sass */
// Google fonts
// ====================
@import url('https://fonts.googleapis.com/css?family=Droid+Serif|Oxygen')


/ base styles
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
