Little Grunt Boilerplate
========================

###An initial boilerplate for front-end projects and testing

Generally, when you have any kind of option that could be toggled/changed by the developer - for example, a flag to enable a debug build, or a different API key for deploying - you should make that configurable through an environment variable, so the developer doesn't have to modify the task configuration directly.

package.json configuration is useful for being able to use default boilerplate (such as the uglify task's banner in the initial example) and not having to update your configuration if something basic (like your project's name) changes. You can also feel free to add custom keys to package.json to use in your configuration.

Hopefully, these tricks will make it easier for you to make maintainable Grunt configurations.

####Useful Links
  - 'More maintainable Gruntfiles': http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
  - 'Match files using the patterns the shell uses': https://www.npmjs.com/package/glob
  - 'Node.js Module Patterns': http://darrenderidder.github.io/talks/ModulePatterns
  - 'Understanding module.exports and exports in Node.js':
    - 'Node.js Docs': http://nodejs.org/api/modules.html#modules_module_exports
    - 'What is a Module': http://www.sitepoint.com/understanding-module-exports-exports-node-js/
    - 'What is the difference': http://www.hacksparrow.com/node-js-exports-vs-module-exports.html
    - 'Curiosity / Study': http://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js
    - 'Curiosity / Study': http://openmymind.net/2012/2/3/Node-Require-and-Exports/
