// Karma configuration
// Generated on Tue Sep 30 2014 13:57:06 GMT+0400 (MSK)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'commonjs'],


    // list of files / patterns to load in the browser
    files: [
      '../../../vendor/assets/components/{lodash/dist,mustache.js,ractive,q,keymaster,jquery/dist}/*.js',
      'services/*.js',
      'models/*.js',
      'templates/**/*.ejs',
      'views/**/*.js',
      'test/unit/**/*.js',
    ],


    // list of files to exclude
    exclude: [
      '../../../vendor/assets/components/**/*{Gruntfile,plugin,gulpfile,shim,*.min,*.runtime,queue}.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        '**/*.ejs': ['ejs'],
        '**/*.js': ['commonjs'],
        '../../../vendor/assets/components/{lodash/dist,mustache.js,ractive,q,keymaster,jquery/dist}/*.js': ['commonjs']
    },

    commonjsPreprocessor: {
        modulesRoot: './vendor/assets/components/',
    },

    ejsOptions: {
        parentPath: './'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
