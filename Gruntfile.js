module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          //specify : 'font-va.css',
          outputStyle : 'expanded', //Can be: nested, expanded, compact, compressed.
          watch : true
        }
      }
    },
    watch: {
      scripts: {
        files: ['*.scss'],
        tasks: ['compass'],
        options: {
          spawn: false,
        },
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['compass']);
};