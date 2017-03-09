let gulp = require('gulp');
let sourcemaps = require('gulp-sourcemaps');
let postcss = require('gulp-postcss');
// PostCSS
let cssnext = require('postcss-cssnext');

// gulp.task('css', function () {
//     return gulp.src('./**/src/*.css')
//         .pipe(sourcemaps.init())
//         .pipe(postcss([cssnext]))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest((glob) => glob.));
// });
