const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');
const minifyJs = require('gulp-uglify');
const minifyCss = require('gulp-uglifycss');
const minifyImg = require('gulp-image');
const convertWebp = require('gulp-webp');
const minifyHtml = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

sass.compiler = require('node-sass');


// function html() {
//     return src('src/pages/**/*.html')
//         .pipe(minifyHtml({
//             collapseWhitespace: true,
//             minifyCSS: true,
//             minifyJS: true,
//     }))
//         .pipe(dest('dist/'))
// }

// function testeCss() {
//     return src('src/css/*.scss')
//         .pipe(sourceMaps.init())
//         .pipe(sass().on('error', sass.logError))
//         .pipe(cleanCss())
//         .pipe(sourceMaps.write())
//         .pipe(concat('bludle.css'))
//         .pipe(dest('dist/'))
// }

// function javascript() {
//     return src('src/js/*.js')
//     .pipe(minifyJs())
//     .pipe(rename({ extname: '.min.js' }))
//     .pipe(dest('dist/'))
// }

function images() {
    return src(['src/images/*.jpg', 'src/images/*.png', 'src/images/**/*.jpg', 'src/images/**/*.png' ])
        .pipe(minifyImg())
        .pipe(dest('dist/images'))
     
}



function imagesWebp() {
    return src(['src/images/*.jpg', 'src/images/*.png', 'src/images/**/*.jpg', 'src/images/**/*.png' ])
    .pipe(convertWebp())
    .pipe(dest('dist/images'))
}



// exports.default = parallel(html, javascript, testeCss, images, imagesWebp)
exports.default = parallel(images,imagesWebp)
   