module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.initConfig({
    
    sass: {
      // Nom de la tâche
      dist: {
        // Nom de la sous-tâche
        options: {
          // Options
          style: "expanded",
        },
        files: {
          // Liste des fichiers
          "css/style.css": "css/scss/style.scss", // 'destination': 'source'
        },
      },
    },
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['css/scss/style.scss'],
        tasks: ['sass:dist'],
      },
    },
  });

  // Import du package
 

  // Redéfinition de la tâche `default` qui est la tâche lancée dès que vous lancez Grunt sans rien spécifier.
  // Note : ici, nous définissons sass comme une tâche à lancer si on lance la tâche `default`.
 // grunt.registerTask("default", ["sass:dist"]);
  grunt.registerTask("default", ["watch"]);
};