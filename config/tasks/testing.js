/**
 * Created by Marco on 08/05/2014.
 */
module.exports = function(grunt) {
    // Default task(s).
    // A very basic default task.
    grunt.registerTask('testing', 'Compiles all of the assets and copies the files to the build directory.', function() {
        grunt.log.write('Start testing tasks...').ok();
        var done = this.async();
        grunt.task.run(['jshint','karma','watch']);
        done();
    });
};