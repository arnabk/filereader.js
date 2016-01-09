/**
 * Created by Arnab Karmakar on 1/9/16.
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('jshint', function() {
    return gulp.src("filereader.js")
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('js', function() {
    return gulp.src('filereader.js')
        .pipe(uglify())
        .pipe(concat("filereader.min.js"))
        .pipe(gulp.dest("."))
});

gulp.task('default', ['jshint', 'js']);
