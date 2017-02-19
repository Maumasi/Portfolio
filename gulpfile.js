
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');


// =================== ES6: Classes ============================================
// compile ES6 to legacy Javascript
gulp.task('ES6Classes', () => {
  return gulp.src(['./ES6/classes/es6/*.js'])
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('./ES6/classes/es6/compiledES6'))
});

// uglify the compiled ES6
// This gives us a chance to make changes to the compiled ES6 if we need to
gulp.task('compressES6Classes', ['ES6Classes'], () => {
  return gulp.src('./ES6/classes/es6/compiledES6/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./ES6/classes/js'));
});

// =================== ES6: Array Helpers ======================================
// compile ES6 to legacy Javascript
gulp.task('ES6ArrayHelpers', () => {
  return gulp.src(['./ES6/arrayHelpers/es6/*.js'])
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('./ES6/arrayHelpers/es6/transpiledES6'))
});

// uglify the compiled ES6
// This gives us a chance to make changes to the compiled ES6 if we need to
gulp.task('compressES6ArrayHelpers', ['ES6ArrayHelpers'], () => {
  return gulp.src('./ES6/arrayHelpers/es6/transpiledES6/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./ES6/arrayHelpers/js'));
});


// =================== SASS ====================================================
// compile SASS files
gulp.task('sass', () => {
  return gulp.src('./SASS/sass/styles.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./SASS/css/'));
});


// =================== Watch & Default =========================================
// watch for sass file changes on save
// If there are any changes on save, run this array of gulp tasks
gulp.task('watch', () => {
  gulp.watch([
    // watch these files
    'ES6/arrayHelpers/es6/*.js',
    'ES6/classes/es6/*.js',
    'SASS/sass/styles.sass'
  ],
  // if a change on save is found run these tasks
  ['compressES6ArrayHelpers', 'compressES6Classes', 'sass']);
});


// just type `gulp` in the terminal to execute all the gulp tasks
gulp.task('default', ['compressES6ArrayHelpers', 'compressES6Classes', 'sass', 'watch']);
