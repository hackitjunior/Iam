var gulp = require('gulp');
var browserSync = require ('browser-sync');
var sass = require('gulp-sass');

const paths = {
    styles: {
      src: 'scss/*.scss',
      dest: 'dist/css/'
    }
};

function styles() {
    return gulp.src(paths.styles.src)
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(gulp.dest(paths.styles.dest))
            .pipe(browserSync.stream())
}

function reload() {
    browserSync.reload();
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(paths.styles.src, styles);

    gulp.watch("*.html", reload);
}

gulp.task('default', watch);