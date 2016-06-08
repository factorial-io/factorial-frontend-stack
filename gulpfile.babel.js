import gulp from 'gulp';

import postcss from 'gulp-postcss';
const processors = [
  import 'postcss-import',
  import 'postcss-url',
  import 'postcss-custom-properties',
  import 'postcss-calc',
  import 'postcss-color-function',
  import 'postcss-custom-media',
  import 'postcss-pseudoelements',
  import 'autoprefixer',
];
gulp.task('css', () => gulp.src('./src/index.css')
  .pipe(postcss(processors))
  .pipe(gulp.dest('build')));

import stylelint from 'gulp-stylelint';
gulp.task('stylelint', () => gulp.src('./src/index.css')
  .pipe(stylelint(
    {
      reporters: [
        {
          formatter: 'string',
          console: true,
        },
      ],
    }
  )
));

import watchify from 'watchify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import gutil from 'gulp-util';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
const _ = {
  assign: require('lodash/assign'),
};

// add custom browserify options here
const customOpts = {
  entries: ['./src/index.js'],
  debug: true,
};
const opts = _.assign({}, watchify.args, customOpts);
const b = watchify(browserify(opts));

// add transformations here
// i.e. b.transform(coffeeify);

gulp.task('js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('index.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({ loadMaps: true })) // loads map from browserify file
     // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('build'));
}

import eslint from 'gulp-eslint';
gulp.task('eslint', () => gulp.src(['./src/index.js', 'gulpfile.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));

import ghPages from 'gulp-gh-pages';
gulp.task('deploy', () => gulp.src('build/**/*')
  .pipe(ghPages()));

import connect from 'gulp-connect';
gulp.task('connect', () => {
  connect.server({
    root: 'dist',
  });
});

import ava from 'gulp-ava';
gulp.task('ava', () =>
  gulp.src('test/test.js')
    .pipe(ava())
);
