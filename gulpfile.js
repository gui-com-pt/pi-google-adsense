var gulp = require('gulp'),
    concat = require('gulp-concat');

var appModules = ['./src/*.mdl.js', './src/**/*.mdl.js', './src/*.js', './src/**/*.js'];

gulp.task('scripts', function(){

    gulp.src(appModules)
        .pipe(concat('pi-google-adsense.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['scripts']);
