module.exports = {
    paths: {
        sources: {
            images: 'src/images/**',
            scripts: ['!src/js/global.js', 'src/js/**/*.js'],
            html: 'src/*.html',
            sass:'src/sass/**/*.scss'
        },
        destinations: {
            images: 'dist/content',
            html:'dist',
            jsFolder: 'src/js',
            cssFolder:'src/css'
        }
    }
};