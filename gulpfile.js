var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css');


gulp.task('static-server', function() {
    browserSync.init({
        server: "./app",
        injectChanges: true
    });
});

gulp.task('scripts', function() {
    gulp.src(['./app/src/js/**/*.js'])
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./app/build/js/'));
});

gulp.task('styles', function() {
    gulp.src(['./app/src/**/*.css'])
        .pipe(minifyCss())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('./app/build/css/'));
});

gulp.task('html', function() {
  gulp.src(['./app/src/views/*.html'])
        .pipe(gulp.dest('./app/build/views/'));
});

gulp.task('watch', function() {
    gulp.start(['static-server', 'scripts', 'styles', 'html']);

    gulp.watch(['./app/src/**/*.html', './app/index.html'], ['html']);
    gulp.watch('./app/src/js/**/*.js', ['scripts']);
    gulp.watch('./app/src/css/*.css', ['styles']);

    gulp.watch("./app/index.html").on('change', browserSync.reload);
    gulp.watch("./app/src/views/*.html").on('change', browserSync.reload);
    gulp.watch("./app/src/js/**/*.js").on('change', browserSync.reload);
    gulp.watch("./app/src/css/*.css").on('change', browserSync.reload);
});
