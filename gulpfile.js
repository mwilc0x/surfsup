'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var ts = require('gulp-type');

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


gulp.task('scripts', function() {
    var tsResult = gulp.src('lib/*.ts')
                       .pipe(ts({
                           declarationFiles: true,
                           noExternalResolve: true
                       }));

    tsResult.dts.pipe(gulp.dest('release/definitions'));
    return tsResult.js.pipe(gulp.dest('bin'));
});
