// Load config variables from ../gulpconfig.js
var config = require('../gulpconfig').assets;

var gulp = require('gulp'),
    runSequence = require('gulp4-run-sequence');


gulp.task('imgs', function () {
  return gulp.src(config.src.imgs)
    .pipe(gulp.dest(config.dest.imgs))
});
gulp.task('meta', function () {
  return gulp.src(config.src.meta)
    .pipe(gulp.dest(config.dest.meta))
});
gulp.task('fonts', function () {
  return gulp.src(config.src.fonts)
    .pipe(gulp.dest(config.dest.fonts))
});

gulp.task('assets', function (callback) {
  runSequence('imgs', 'meta', 'fonts', callback);
});

gulp.task('assets:watch', function () {
  gulp.watch(config.src.root, ['assets']);
});

gulp.task('assets:watch', function () {
    return gulp.watch(config.src.root, gulp.series('assets'));
});
