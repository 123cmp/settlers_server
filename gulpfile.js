var gulp = require("gulp"),
    babel = require("gulp-babel"),
    nodemon = require('gulp-nodemon'),
    os = require('os'),
    opn = require('opn');

gulp.task("compile", function () {
    return gulp.src("src/**/*.js")
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest("build"));
});

gulp.task('start', ['compile'], function () {
    nodemon({
        script: 'build/api.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('browser', ['start'], function () {
    opn("http://localhost:9900");
});

gulp.task('build', ['browser']);

gulp.task('default', ['build']);

