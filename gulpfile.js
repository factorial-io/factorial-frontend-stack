const gulp = require('gulp')

const postcss = require('gulp-postcss')
const processors = [
  require('postcss-import'),
  require('postcss-url'),
  require('postcss-custom-properties'),
  require('postcss-calc'),
  require('postcss-color-function'),
  require('postcss-custom-media'),
  require('postcss-pseudoelements'),
  require('autoprefixer')
]
const stylelint = require('gulp-stylelint')

gulp.task('css', function() {
  return gulp.src('./src/index.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'))
})

gulp.task('stylelint', function() {
  return gulp.src('./src/index.css')
    .pipe(stylelint(
      {
        reporters: [
          {
            formatter: 'string',
            console: true
          }
        ]
      }
    )
  )
})
