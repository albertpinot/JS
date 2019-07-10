module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Configuration de Grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded',
        },
        files: [{
          expand: true,
          cwd: 'dev/scss/',
          src: ['*.scss'],
          dest: 'theme/css/',
          ext: '.css',
        }],
      },
    },
    cssmin: {
      dist: {
        files: {
          'theme/css/style.min.css': ['theme/css/style.css'],
        },
      },
    },
    watch: {
      scripts: {
        files: '**/*.es6',
        tasks: ['scripts:dist'],
      },
      styles: {
        files: '**/*.scss',
        tasks: ['styles:dist'],
      },
    },
  });

  grunt.registerTask('default', ['dist', 'watch']);
  grunt.registerTask('dist', ['styles:dist']);
  grunt.registerTask('styles:dist', ['sass:dist', 'cssmin:dist']);
};
