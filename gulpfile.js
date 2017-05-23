const gulp = require('gulp');
const config = {}; // local config
const baseTasks = require('./index.js');

const tasks = {
  build: [],
  fix: [],
  test: [],
  watch: [],
};

baseTasks(gulp, config, tasks);

gulp.task('build', gulp.series(tasks.build));
gulp.task('test', gulp.parallel(tasks.test));
gulp.task('watch', gulp.parallel(tasks.watch));
