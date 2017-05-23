module.exports = {
  css: {
    enabled: true,
    src: [
      './lib/index.css',
    ],
    dest: './build',
    browserslist: [
      'last 2 versions',
    ],
    lint: {
      enabled: false,
    },
    fix: {
      enabled: true,
      dest: './lib',
    },
  },
  js: {
    enabled: true,
    src: [
      './lib/index.js',
    ],
    dest: './build',
  },
};
