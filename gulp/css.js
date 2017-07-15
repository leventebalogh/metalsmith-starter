const gulp = require('gulp');
const path = require('path');
const $ = require('gulp-load-plugins')();

const BASE_DIR = path.join(__dirname);
const SOURCE_DIR = path.resolve(BASE_DIR, '../src/content');
const LAYOUTS_DIR = path.resolve(BASE_DIR, '../src/layouts');
const PARTIALS_DIR = path.resolve(BASE_DIR, '../src/layouts/partials');
const DESTINATION_DIR = path.resolve(BASE_DIR, '../build');
const STYLE_DIR = path.resolve(BASE_DIR, '../src/styles');
const ASSETS_DIR = path.resolve(BASE_DIR, '../assets');

module.exports = {
    css,
    watchCss
};

function css () {
    return gulp
        .src(`${ STYLE_DIR }/main.scss`)
        .pipe($.sass())
        .pipe($.cleanCss())
        .pipe(gulp.dest(`${ DESTINATION_DIR }/css`));
}

function watchCss () {
    return gulp.watch(`${ STYLE_DIR }/**/*.scss`, ['css']);
}
