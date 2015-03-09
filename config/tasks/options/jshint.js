module.exports = {
    files: ['Gruntfile.js', 'demo/src/**/*.js', 'demo/test/**/*.js'],
    options: {
        // options here to override JSHint defaults
        globals: {
            jQuery: true,
            console: true,
            module: true,
            document: true
        },
        reporter: require('jshint-stylish')
    }
};