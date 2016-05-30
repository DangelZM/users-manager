var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('webserver', function() {
    connect.server({
        port:3030,
        root: __dirname,
        livereload: true,
        fallback: 'index.html'
    });
});

gulp.task('default', ['webserver']);