var gulp = require('gulp'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    spritesmith = require('gulp.spritesmith');


gulp.task('sprite', function () {
    var spriteData = gulp.src('img/sprites/*')
        .pipe(spritesmith({
            imgName: '../assets/img/sprite.png',
            cssName: 'sprite.css',
            cssVarMap: function(sprite) {
                sprite.name = 'appl-' + sprite.name
            }
        }));
    spriteData.img.pipe(gulp.dest('img'));
    spriteData.css
        .pipe(gulp.dest('css'))
        .pipe(clean())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch(['img/sprites/**/*'], ['sprite']);
});
gulp.task('default', ['sprite', 'watch']);

