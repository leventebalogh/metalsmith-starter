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

module.exports = clean;

function clean () {
    return gulp
        .src(DESTINATION_DIR, { read: false })
        .pipe($.clean());
}