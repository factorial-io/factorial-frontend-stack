// import connect from 'gulp-connect';

const babel = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const eslint = require('gulp-eslint');
const exit = require('gulp-exit');
// const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const watchify = require('watchify');

module.exports = (gulp, config, tasks) => {
  function compileJS(done, flag) {
    const bundler = watchify(
      browserify(
        config.js.browserify.src,
        {
          debug: true,
        }
      ).transform(babel)
    );

    function rebundle() {
      return bundler
        .bundle()
        .on('error', (err) => {
          console.error(err); // eslint-disable-line no-console
          this.emit('end');
        })
        .on('time', (time) => {
          console.log(time);
          done();
        })
        .pipe(plumber())
        .pipe(source(config.js.source))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.js.dest));
    }

    if (flag) {
      bundler.on('update', (ids) => {
        console.log(`-> bundling... ${ids}`); // eslint-disable-line no-console
        rebundle();
      });

      rebundle();
    } else {
      console.log('once!');
      rebundle().pipe(exit());
    }
  }

  gulp.task('build:js', (done) => compileJS(done));

  gulp.task('lint:js', () => gulp.src(['lib/index.js', 'gulpfile.js'])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
  );

  gulp.task('fix:js', () => gulp.src(['lib/*.js'])
    .pipe(eslint({ fix: true }))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulp.dest('lib'))
  );

  gulp.task('watch:js', (done) => compileJS(done, true));

  tasks.build.push('build:js');
  tasks.watch.push('watch:js');
  tasks.fix.push('fix:js');
  tasks.test.push('lint:js');
};
