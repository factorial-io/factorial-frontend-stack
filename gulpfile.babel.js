import gulp from 'gulp';
import postcss from 'gulp-postcss';
import stylelint from 'gulp-stylelint';
import eslint from 'gulp-eslint';
import connect from 'gulp-connect';
import ava from 'gulp-ava';
import mochaPhantomJS from 'gulp-mocha-phantomjs';

const processors = [
  require('postcss-import'),
  require('postcss-url'),
  require('postcss-custom-properties'),
  require('postcss-calc'),
  require('postcss-color-function'),
  require('postcss-custom-media'),
  require('postcss-pseudoelements'),
  require('autoprefixer'),
];

gulp.task('css', () => gulp.src('lib/index.css')
  .pipe(postcss(processors))
  .pipe(gulp.dest('build')));

gulp.task('stylelint', () => gulp.src('lib/index.css')
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

gulp.task('eslint', () => gulp.src(['lib/index.js', 'gulpfile.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));

gulp.task('connect', () => {
  connect.server({
    root: 'dist',
  });
});

gulp.task('ava', () =>
  gulp.src('test/unit/unit.js')
    .pipe(ava())
);

gulp.task('mocha', () =>
  gulp.src('test/behavior/behavior.html')
    .pipe(mochaPhantomJS())
);

// bundlejs

import sourcemaps from 'gulp-sourcemaps';
import exit from 'gulp-exit';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import watchify from 'watchify';
import babel from 'babelify';

function compileJS(flag) {
  const bundler = watchify(browserify('./lib/index.js', { debug: true }).transform(babel));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', (err) => {
        console.error(err);
        this.emit('end');
      })
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'));
      // .pipe(exit());
  }

  if (flag) {
    bundler.on('update', () => {
      console.log('-> bundling...');
      rebundle();
    });

    rebundle();
  } else {
    rebundle().pipe(exit());
  }
}

function watchJS() {
  return compileJS(true);
}

gulp.task('js', () => compileJS());
gulp.task('watch', () => watchJS());
gulp.task('default', ['watch']);
