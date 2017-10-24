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


/**************************************HTML*****************************/


const html = () => {
    gulp.src(sources.html)
        .pipe(useref())
        .pipe(gulp.dest(destinations.html))
};

gulp.task('htmlJS', ['concatJS'], html);

gulp.task('htmlSass', ['compileSass'], html);



/**************************************IMAGES*****************************/


gulp.task('images',() => {
    gulp.src(sources.images)
        .pipe(imageMin())
        .pipe(gulp.dest(destinations.images));
});



/**************************************ICONS*****************************/





/**************************************JAVASCRIPT*****************************/


// Javascript movement
gulp.task('scripts', ['htmlJS'], () => {
    gulp.src(sources.scripts)
        .pipe(gulp.dest(destinations.scripts))
});

//Javascript Concatation,Minificication,Sourcemaps
gulp.task('concatJS', () => {
    gulp.src(sources.js)
        .pipe(maps.init())
        .pipe(concat('global.js'))
        .pipe(uglify())
        .pipe(maps.write('./'))
        .pipe(gulp.dest(destinations.jsFolder))
});


/**************************************SASS & CSS*********************************/


//Sass Compiling,css concating,css sourcemaps,css minification and movement
gulp.task('styles', ['htmlSass'], () => {
    gulp.src(sources.styles)
        .pipe(gulp.dest(destinations.styles))
});

gulp.task('compileSass', () => {
    gulp.src(sources.sass)
        .pipe(maps.init())
        .pipe(sass({ outputStyle: 'compressed', outFile:'global.css' }))
        .pipe(maps.write('./'))
        .pipe(gulp.dest(destinations.cssFolder))
});


/**************************************OTHER*********************************/