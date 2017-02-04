

const gulp = require('gulp');
const babel = require('gulp-babel');






gulp.task('compileES6', () => {
    return gulp.src('es6/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./js/main.js'));
});

// watch for sass file changes on save
gulp.task('watch', () => {
  gulp.watch('./es6/**/*.js', ['compileES6']);
});



gulp.task('default', ['compileES6', 'watch'])
