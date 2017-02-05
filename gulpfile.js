
const gulp = require('gulp');
const babel = require('gulp-babel');

// compile ES6 to legacy Javascript
gulp.task('compileES6', () => {
    return gulp.src(['./ES6/classes/es6/*.js'])
      .pipe(babel({presets: ['es2015']}))
      .pipe(gulp.dest('./ES6/classes/js'))
});

// watch for sass file changes on save
gulp.task('watch', () => {
    gulp.watch('ES6/classes/es6/*.js', ['compileES6']);
});

// just type `gulp` in the terminal to execute all the gulp tasks
gulp.task('default', ['compileES6', 'watch'])
