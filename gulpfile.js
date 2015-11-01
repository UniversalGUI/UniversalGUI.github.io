// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var minifyCss = require('gulp-minify-css');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest('minified'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('_scripts/*js')
/*      .pipe(concat('_scripts.js'))
        .pipe(gulp.dest('minified/scripts'))*/
        .pipe(rename({
                suffix: '.min'
            }))
        .pipe(uglify())
        .pipe(gulp.dest('minified/scripts'));
});

// Minify css
gulp.task('minify-css', function() {
  return gulp.src('*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(gulp.dest('minified'));
});

// Minify html
gulp.task('minify', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(gulp.dest('minified'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('*.js', ['lint', 'scripts']);
    gulp.watch('*.scss', ['sass']);
    gulp.watch('*.html'['minify']);
    gulp.watch('*.css'['minify-css']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'minify','minify-css', 'watch']);
