const { src, dest, watch, parallel } = require('gulp');
const rename = require('gulp-rename');
const minifyJs = require('gulp-uglify');
const babel = require('gulp-babel');
const minifyImg = require('gulp-image');
const minifyHtml = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');


function html() {
    return src('src/pages/**/*.html')
        .pipe(minifyHtml({
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
    }))
        .pipe(dest('dist/pages'))
}


function minifyScss() {
    return src(['src/css/*.scss', 'src/css/*.css'])
        .pipe(sourceMaps.init())
        .pipe(sass({ outputStyle:'compressed'}))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest('dist/css'))
}

function javascript() {
    return src('src/js/*.js')
    .pipe(minifyJs())
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/js'))
}

function images() {
    return src(['src/images/*.jpg', 'src/images/*.png', 'src/images/**/*.jpg', 'src/images/**/*.png' ])
        .pipe(minifyImg())
        .pipe(dest('dist/images'))
     
}



exports.default = function () {
    watch('src/pages/**/*.html', html);
    watch('src/js/*.js', javascript);
    watch(['src/css/*.scss', 'src/css/**/*.scss'], minifyScss);
    watch(['src/images/*.jpg', 'src/images/*.png', 'src/images/**/*.jpg', 'src/images/**/*.png'], images);
   
}

// exports.default = parallel(html, javascript, minifyScss, images)

   