module.exports = function(grunt) {

// Gruntfile.js
grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

     // configure uglify to minify js files -------------------------------------
    uglify: {
      build: {
        files: {
          'dist/js/main.min.js': ['static/js/**/*.js']
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'dist/css/styles.min.css' : 'static/css/styles.css'
        }
      }
    },

    // compile less stylesheets to css -----------------------------------------
    less: {
      build: {
        files: {
          'static/css/styles.css': 'static/less/styles.less'
        }
      }
    },

    jshint: {
      all: ['static/js/**/*.js']
    },

    watch:{
      js: {
        files: ['static/js/**/*.js'],
        tasks: ['jshint', 'uglify'],
          options: {
            spawn: false,
          }
      },
      less: {
        files: ['static/less/styles.less'],
        tasks: ['less', 'cssmin'],
          options: {
            spawn: false,
          }
      }
    }
});

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
};