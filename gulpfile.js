const gulp = require('gulp'),
    imageMin = require('gulp-imagemin'),
    useref = require('gulp-useref'),
    maps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    replace = require('gulp-replace'),
    del = require('del'),
    runSeq =require('run-sequence'),
    gConfig = require('./gulpConfig'),
    sources = gConfig.paths.sources,
    destinations = gConfig.paths.destinations;


/**************************************HTML*****************************/

//html movement and concating all css and js tags/scripts, image replacement
const html = () => {
    gulp.src(sources.html)
        .pipe(useref())
        .pipe(replace('images', 'content')) //can also be achieved via jquery or vanilla JS
        .pipe(gulp.dest(destinations.html));
};

gulp.task('htmlJS', ['concatJS'], html);

gulp.task('htmlSass', ['compileSass'], html);



/**************************************IMAGES*****************************/

//image movement and optimizing
gulp.task('images',() => {
    gulp.src(sources.images)
        .pipe(imageMin())
        .pipe(gulp.dest(destinations.images));
});



/**************************************ICONS*****************************/

// Icon movement
gulp.task('icons', () => {
    gulp.src(sources.icons)
        .pipe(gulp.dest(destinations.icons));
});


/**************************************JAVASCRIPT*****************************/


// Javascript movement
gulp.task('scripts', ['htmlJS'], () => {
    gulp.src(sources.scripts)
        .pipe(gulp.dest(destinations.scripts));
});

//Javascript Concatation,Minificication,Sourcemaps
gulp.task('concatJS', () => {
    gulp.src(sources.js)
        .pipe(maps.init())
        .pipe(concat('global.js'))
        .pipe(uglify())
        .pipe(maps.write('./'))
        .pipe(gulp.dest(destinations.jsFolder));
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
        .pipe(sass({ outputStyle: 'compressed', outFile: 'global.css' }))
        .pipe(maps.write('./'))
        .pipe(gulp.dest(destinations.cssFolder));
});


/**************************************OTHER*********************************/


//remove the dist folder
gulp.task('clean', () => del(destinations.server));

gulp.task('build', ['clean'], (callback) => {
    runSeq(['images','icons','styles','scripts'], callback);
});