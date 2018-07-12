'use strict';

let gulp = require('gulp');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let minify = require('gulp-minify');

// JS building
let scriptsToBundle = ['./dist/index.js'];

gulp.task('bundle-js', function() {
  return gulp.src(scriptsToBundle)
    .pipe(concat('index.js'))
    .pipe(minify({
      ext:{
        src:'.js',
        min:'.min.js'
      }
    }))
    .pipe(gulp.dest('./dist'))
});

///////

gulp.task('default', ['bundle-js']);