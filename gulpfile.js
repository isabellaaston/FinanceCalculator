
// Require in needed packages
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');


function compileTs(cb) {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist/js'));
    cb();
}


// Sass compiler
function compileSass(cb) {
    return gulp.src('src/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
    cb();
}

// File watcher
function watch(cb) {
    gulp.watch("src/scss/**/*.scss", compileSass);
    gulp.watch("src/js/*.ts", compileTs);
    cb();
}

exports.sass = compileSass;
exports.watch = watch;