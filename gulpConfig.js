module.exports = {
    paths: {
        sources: {
            images: 'src/images/**',
            html: 'src/*.html',
            js: ['!src/js/global.js', 'src/js/**/*.js'],
            sass: 'src/sass/**/*.scss',
            scripts: 'dist/scripts/all.min.js',
            styles: 'dist/styles/all.min.css',
            icons: 'src/icons/**',
            server:'src'
        },
        destinations: {
            images: 'dist/content',
            html:'dist',
            jsFolder: 'src/js',
            cssFolder: 'src/css',
            scripts: 'dist/scripts',
            styles: 'dist/styles',
            icons: 'dist/icons',
            server:'dist'
        }
    }
};