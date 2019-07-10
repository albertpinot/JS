module.exports = function (grunt) {
  // Packages à un installer avec npm et grunt
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-criticalcss');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-eslint');

  const projectName = '';

  const jsSrc = [
    'dev/js/lib/tools.js',
    'dev/js/lib/ajaxRequest.min.js',
    'dev/js/lib/selectJs.min.js',
    'dev/js/lib/touchEvent.min.js',
    'dev/js/lib/jsDatepicker.min.js',
    'dev/js/lib/formulaireTools.min.js',
    //'dev/js/lib/parallax.min.js',
    //'dev/js/lib/markerWithLabel.js',
    //'dev/js/lib/searchAio.js',
    //'dev/js/lib/serialize.js',
    'dev/js/script.js',
  ];
  const jsDist = 'theme/js/script.js';

  // Configuration de Grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Tâche qui convertit les fichiers scss en css
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
    // Minifie le css
    cssmin: {
      dist: {
        files: {
          'theme/css/style.min.css': ['theme/css/style.css'],
        },
      },
      critical: {
        files: {
          'theme/css/critical.min.css': ['dev/critical.css'],
        },
      },
    },
    // Tâche qui convertis l'ES6 en JS
    babel: {
      options: {
        sourceMap: true,
        presets: ['babel-preset-env'],
      },
      dist: {
        files: {
          'dev/js/script.js': 'dev/js/es6/script.es6',
        },
      },
    },
    // Tâche qui concatène plusieur fichier JS dans un seul fichier
    concat: {
      options: {
        sourceMap: false,
        separator: ';',
      },
      devEs6: {
        src: [
          'dev/js/es6/scripts/classes/InfiniteSlider.es6',
          'dev/js/es6/scripts/classes/Lightbox.es6',
          'dev/js/es6/scripts/classes/Interval.es6',
          'dev/js/es6/scripts/global.es6',
          'dev/js/es6/scripts/page/*.es6',
        ],
        dest: 'dev/js/es6/script.es6',
      },
      dist: {
        src: jsSrc,
        dest: jsDist,
      },
    },
    //Tâche qui map les fichiers 
    uglify: {
      dist: {
        options: {
          sourceMap: {
            includeSources: true,
            sourceMapIn: 'dev/js/script.js.map'
          },
        },
        files: {
          'theme/js/script.min.js': ['theme/js/script.js'],
        },
      },
    },
    // Tâche en attente d'une modification pour compiler les changements 
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
    // Package qui permet de verifier les normes, synthaxe du code JS
    eslint: {
      target: ['dev/js/es6/script.es6'],
      options: {
        fix: true,
      },
    },
    criticalcss: {
      custom: {
        options: {
          url: 'http://localhost/'+projectName+'/www/',
          width: 1920,
          height: 1080,
          outputfile: 'dev/critical.css',
          filename: 'theme/css/style.min.css',
          buffer: 800 * 1024,
          ignoreConsole: false,
        },
      },
    },
  });
  
  grunt.registerTask('default', ['dist', 'critical', 'watch']);
  grunt.registerTask('dist', ['styles:dist', 'scripts:dist']);
  grunt.registerTask('scripts:dist', ['concat:devEs6', 'scripts:lint', 'babel:dist', 'concat:dist', 'uglify:dist']);
  grunt.registerTask('scripts:lint', ['eslint']);
  grunt.registerTask('styles:dist', ['sass:dist', 'cssmin:dist']);
  grunt.registerTask('critical', ['criticalcss', 'cssmin:critical']);
};
