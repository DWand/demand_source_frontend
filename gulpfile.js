var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css');


gulp.task('static-server', function() {
    browserSync.init({
        server: "./app/build"
    });
});

gulp.task('components', function() {
    gulp.src(['./app/components/**/*'])
      .pipe(gulp.dest('./app/build/components/'));
});

gulp.task('scripts', function() {
    gulp.src(['./app/src/js/app.js', './app/src/js/**/*.js'])
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
  gulp.src(['./app/src/**/*.html'])
        .pipe(gulp.dest('./app/build/'));
});

gulp.task('watch', function() {
    gulp.start(['static-server', 'scripts', 'styles', 'html', 'components']);

    gulp.watch(['./app/src/**/*.html', './app/index.html'], ['html'], browserSync.reload);
    gulp.watch('./app/src/js/**/*.js', ['scripts'], browserSync.reload);
    gulp.watch('./app/src/css/*.css', ['styles'], browserSync.reload);

    gulp.watch("./app/src/index.html").on('change', browserSync.reload);
    gulp.watch("./app/src/views/*.html").on('change', browserSync.reload);
    gulp.watch("./app/src/js/**/*.js").on('change', browserSync.reload);
    gulp.watch("./app/src/css/*.css").on('change', browserSync.reload);
});
