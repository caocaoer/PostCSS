var gulp = require('gulp');
var postcss = require('gulp-postcss');
// var autoprefixer = require('autoprefixer')({
//     browsers: ['last 3 versions']
// });
var cssnext = require('postcss-cssnext'); // 有了cssnext不需要用autoprefixer
var cssnano = require('cssnano'); // cssnano 会压缩 CSS 文件来确保在开发环境中下载量尽可能的小

gulp.task('css', function(){
    return gulp.src('src/main.css')
            .pipe(postcss([
                // autoprefixer,
                cssnext,
                cssnano
            ]))
            .pipe(gulp.dest('dist/main.css'));
});