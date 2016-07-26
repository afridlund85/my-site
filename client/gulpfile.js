var gulp = require('gulp'),
  sass   = require('gulp-sass'),
  concat = require('gulp-concat'),
  sassFiles = './src/**/*.scss'

gulp.task('sass', function(){
  return gulp.src(sassFiles)
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(concat('style.min.css'))
  .pipe(gulp.dest('./css'))
})

gulp.task('default', ['sass'], function () {
  gulp.watch(sassFiles, ['sass'])
});