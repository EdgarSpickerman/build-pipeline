module.exports = {
    paths: {
        sources: {
            images: 'src/images/**',
            js: ['!src/js/global.js', 'src/js/**/*.js'],
            html: 'src/*.html',
            sass: 'src/sass/**/*.scss',
            styles: 'dist/styles/all.min.css',
            scripts:'dist/scripts/all.min.js'
        },
        destinations: {
            images: 'dist/content',
            html:'dist',
            jsFolder: 'src/js',
            cssFolder: 'src/css',
            scripts: 'dist/scripts',
            styles:'dist/styles'
        }
    }
};