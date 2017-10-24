const gulp = require('gulp'),
    imageMin = require('gulp-imagemin'),
    useref = require('gulp-useref'),
    maps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    gConfig = require('./gulpConfig'),
    sources = gConfig.paths.sources,
    destinations = gConfig.paths.destinations;

const html = () => {
    gulp.src(sources.html)
        .pipe(useref())
        .pipe(gulp.dest(destinations.html))
};

//Other Task's
gulp.task('images',() => {
    gulp.src(sources.images)
        .pipe(imageMin())
        .pipe(gulp.dest(destinations.images));
});

// Javascript Concatation,Minificication,Sourcemaps,and movement
gulp.task('scripts', ['htmlJS'], () => {});

gulp.task('concatJS', () => {
    gulp.src(sources.scripts)
        .pipe(maps.init())
        .pipe(concat('global.js'))
        .pipe(uglify())
        .pipe(maps.write('./'))
        .pipe(gulp.dest(destinations.jsFolder))
});

gulp.task('htmlJS', ['concatJS'], html);

//Sass Compiling,css concating,css sourcemaps,css minification and movement
gulp.task('styles', ['htmlSass'], () => {

});

gulp.task('compileSass', () => {
    gulp.src(sources.sass)
        .pipe(maps.init())
        .pipe(sass({ outputStyle: 'compressed', outFile:'global.css' }))
        .pipe(maps.write('./'))
        .pipe(gulp.dest(destinations.cssFolder))
});

gulp.task('htmlSass', ['compileSass'], html);