var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var watch = require('gulp-watch');

gulp.task('default', ['watch']);

gulp.task('sprite', function () {
    var spriteData = gulp.src('img/sprites/*.png')
        .pipe(spritesmith({
            /* this whole image path is used in css background declarations */
            imgName: '../assets/img/sprite.png',
            cssName: 'sprite.css'
        }));
    spriteData.img.pipe(gulp.dest('img'));
    spriteData.css.pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch(['img/sprites/**/*.png'], ['sprite']);
});


