const gulp = require('gulp')

const postcss = require('gulp-postcss')
const postCssImport = require('postcss-import')
const postCssUrl = require('postcss-url')
const postCssCustomProperties = require('postcss-custom-properties')
const postCssCalc = require('postcss-calc')
const postCssColorFunction = require('postcss-color-function')
const postCssCustomMedia = require('postcss-custom-media')
const postCssPseudoElements = require('postcss-pseudoelements')
const autoprefixer = require('autoprefixer')

gulp.task('css', function() {
  const processors = [
    postCssImport,
    postCssUrl,
    postCssCustomProperties,
    postCssCalc,
    postCssColorFunction,
    postCssCustomMedia,
    postCssPseudoElements,
    autoprefixer
  ]
  return gulp.src('./src/index.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'))
})
