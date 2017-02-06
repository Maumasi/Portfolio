
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

// just type `gulp` in the terminal to execute all the gulp tasks
gulp.task('default', ['compileES6', 'compressJS', 'watch']);
