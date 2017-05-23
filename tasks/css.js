const connect = require('gulp-connect');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const stylefmt = require('gulp-stylefmt');
const stylelint = require('gulp-stylelint');

const postcssImport = require('postcss-import');
const postcssUrl = require('postcss-url');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCalc = require('postcss-calc');
const postcssColorFunction = require('postcss-color-function');
const postcssCustomMedia = require('postcss-custom-media');
const postcssPseudoelements = require('postcss-pseudoelements');
const autoprefixer = require('autoprefixer');

const processors = [
  postcssImport,
  postcssUrl,
  postcssCustomProperties,
  postcssCalc,
  postcssColorFunction,
  postcssCustomMedia,
  postcssPseudoelements,
  autoprefixer,
];

module.exports = (gulp, config, tasks) => {
  gulp.task('build:css', (done) => {
    gulp.src(config.css.src)
      .pipe(plumber())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(postcss(processors))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.css.dest))
      .pipe(connect.reload())
      .on('end', () => {
        done();
      });
  });

  gulp.task('lint:css', () => gulp.src(config.css.src)
    .pipe(plumber())
    .pipe(stylelint(
      {
        failAfterError: false,
        reporters: [
          {
            formatter: 'string',
            console: true,
          },
        ],
      }
    )
  ));

  gulp.task('fix:css', () => gulp.src(config.css.src)
    .pipe(stylefmt({ failAfterError: false }))
    .pipe(gulp.dest(config.css.fix.dest))
  );

  gulp.task('watch:css', () => {
    gulp.watch(config.css.src, ['build:css']);
  });

  tasks.build.push('build:css');
  tasks.watch.push('watch:css');
  tasks.fix.push('fix:css');
  tasks.test.push('lint:css');
};
