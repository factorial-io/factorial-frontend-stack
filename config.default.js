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
    browserify: {
      src: './lib/index.js', // entry point for browserify bundle
    },
    source: 'index.js', // entry point for vinyl source stream
    dest: './build',
  },
};
