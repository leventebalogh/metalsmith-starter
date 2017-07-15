const gulp = require('gulp');
const path = require('path');
const $ = require('gulp-load-plugins')();
const Metalsmith = require('metalsmith');
const collections = require('metalsmith-collections');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const config = require('../config');

const BASE_DIR = path.join(__dirname);
const SOURCE_DIR = path.resolve(BASE_DIR, '../src/content');
const LAYOUTS_DIR = path.resolve(BASE_DIR, '../src/layouts');
const PARTIALS_DIR = path.resolve(BASE_DIR, '../src/layouts/partials');
const DESTINATION_DIR = path.resolve(BASE_DIR, '../build');
const STYLE_DIR = path.resolve(BASE_DIR, '../src/styles');
const ASSETS_DIR = path.resolve(BASE_DIR, '../assets');

module.exports = {
    metalsmith,
    watchMetalsmith
};

function metalsmith () {
    Metalsmith(BASE_DIR)
        .metadata(config.metadata)
        .source(SOURCE_DIR)
        .destination(DESTINATION_DIR)
        .clean(false)
        .use(markdown())
        .use(permalinks())
        .use(layouts({
            engine: 'handlebars',
            directory: LAYOUTS_DIR,
            partials: PARTIALS_DIR
        }))
        .build(errorHandler);
}

function watchMetalsmith () {
    return gulp.watch([
        `${ SOURCE_DIR }/**/*.md`,
        `${ LAYOUTS_DIR }/**/*.html`
    ], ['metalsmith']);
}

function errorHandler (err, files) {
    if (err) {
        throw err;
    }
}
