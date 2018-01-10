const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sassify", function(){
  return gulp.src("styles/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'));
})

gulp.task("theme", function(){
  return gulp.src("styles/theme/starting-grid-theme.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css/'));
})

gulp.task("watch", function(){
  gulp.watch('styles/*.scss', ["sassify", "theme"])
})

gulp.task("default", ["sassify", "theme"])