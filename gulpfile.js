'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var typescript = require('gulp-tsc');

gulp.task('default', function() {
  // do nothing for now
});

gulp.task('tests', function() {
    gulp.src(['tests/*.js'], {
        read: false
    })
    .pipe(mocha({
        reporter: 'spec',
        globals: {
            should: require('chai').should()
        }
    }));
});

gulp.task('compile', function(){
  gulp.src(['lib/*.ts'])
    .pipe(typescript({ module: "commonjs" }))
    .pipe(gulp.dest('bin/'))
});
