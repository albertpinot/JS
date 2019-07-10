module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-criticalcss');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-eslint');
  // grunt.loadNpmTasks('grunt-cwebp');

  const projectName = 'ma-plus-belle-croisiere';

  const jsSrc = [
    'dev/js/lib/tools.js',
    'dev/js/lib/ajaxRequest.min.js',
    'dev/js/lib/selectJs.min.js',
    'dev/js/lib/touchEvent.min.js',
    'dev/js/lib/jsDatepicker.min.js',
    'dev/js/lib/formulaireTools.min.js',
    'dev/js/lib/InfoBox.min.js',
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
    cwebp: {
      dynamic: {
        options: {
          q: 100
        },
        files: [{
          expand: true,
          cwd: 'theme/img/src/',
          src: ['**/*.{png,jpg,jpeg,gif}'],
          dest: 'theme/img/src/'
        }]
      }
    },
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
      critical: {
        files: {
          'theme/css/critical.min.css': ['dev/critical.css'],
        },
      },
    },
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
          'dev/js/es6/scripts/classes/CanvasCaptcha.es6',
          'dev/js/es6/scripts/classes/CustomMap.es6',
          'dev/js/es6/scripts/classes/Worker.es6',
          'dev/js/es6/scripts/classes/LazyLoading.es6',
          'module/EspaceClient/1.0/front/js/espaceclient.es6',
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

  grunt.registerTask('default', ['dist', /*'cwebp', *//*'critical',*/ 'watch']);
  grunt.registerTask('dist', ['styles:dist', 'scripts:dist']);
  grunt.registerTask('scripts:dist', ['concat:devEs6', 'scripts:lint', 'babel:dist', 'concat:dist', 'uglify:dist']);
  grunt.registerTask('scripts:lint', ['eslint']);
  grunt.registerTask('styles:dist', ['sass:dist', 'cssmin:dist']);
  grunt.registerTask('critical', ['criticalcss', 'cssmin:critical']);
};
