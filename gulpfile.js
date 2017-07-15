const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const clean = require('./gulp/clean');
const { metalsmith, watchMetalsmith } = require('./gulp/metalsmith');
const { css, watchCss } = require('./gulp/css');

gulp.task('clean', clean);
gulp.task('css', css);
gulp.task('css:watch', ['css'], watchCss);
gulp.task('metalsmith', metalsmith);
gulp.task('metalsmith:watch', ['metalsmith'], watchMetalsmith);
gulp.task('watch', ['metalsmith:watch', 'css:watch']);
gulp.task('build', $.sequence('clean', ['metalsmith', 'css']));
