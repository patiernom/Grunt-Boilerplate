module.exports = {
    scripts: {
        files: ['demo/src/*js'],
        tasks: ['jshint','karma'],
        options: {
            spawn: false
        }
    }
};