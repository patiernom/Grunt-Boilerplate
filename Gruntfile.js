/**
 * Created by Marco on 08/05/2014.
 */
module.exports = function(grunt) {
    'use strict';

    // Utility to load the different option files
    // based on their names
    var loadConfig = function(path) {
        var glob = require('glob'),
            object = {},
            key;

        glob.sync('*', {cwd: path}).forEach(function(option) {
            key = option.replace(/\.js$/,'');
            object[key] = require(path + option);
        });

        return object;
    };

    // Initial config
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        env: process.env
    };

    // Load tasks from the tasks folder
    grunt.loadTasks('./config/tasks');

    // Load all the tasks options in tasks/options base on the name:
    // watch.js => watch{}
    grunt.util._.extend(config, loadConfig('./config/tasks/options/'));

    // Project configuration.
    grunt.initConfig(config);

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
};