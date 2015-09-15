var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    livereload = require('gulp-livereload');


gulp.task('static-server', function() {
    browserSync.init({
        server: "./app"
    });
});

gulp.task('scripts', function() {
    gulp.src(['./app/src/js/**/*.js'])
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/build/js/'))
        .pipe(livereload());
});

gulp.task('styles', function() {
    gulp.src(['./app/src/**/*.css'])
        .pipe(minifyCss())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/build/css/'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    gulp.start(['static-server', 'scripts', 'styles']);

    livereload.listen();

    gulp.watch('./public/views/*', function() {
        browserSync.reload();
    });
    gulp.watch('./app/src/js/**/*.js', ['scripts'], browserSync.reload);
    gulp.watch('./app/src/css/*.css', ['styles'], browserSync.reload);
});