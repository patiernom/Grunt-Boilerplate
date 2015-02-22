module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../demo',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha','chai', 'sinon'],


        // list of files / patterns to load in the browser
        files: [
            'src/*.js',
            'tests/*.js'
        ],


        // list of files to exclude
        exclude: [
            '**/*.swp'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
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


        // Start these browsers, currently available:
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows) ,'C:\\Program\ Files\ \(x86\)\\Core\ Services\\IETester\\IETester.exe'
        // SET JAVA_HOME:C:\Program Files\Java\jre7\bin
        browsers: ['PhantomJS'],

        // Use this to add custom launchers for example IETester
        customLaunchers: {},

        // list of plugins
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-sinon',
            'karma-phantomjs-launcher'
        ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};