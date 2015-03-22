module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	  
	autoprefixer: {
	  options: {
		browsers: ['last 8 versions']
	  },
	  dist: { // Target
		files: {
		  'css/main.css': 'css/main.css'
		}
	  }
	},
    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/main.css': 'scss/main.scss'
        }        
      }
    },
	uglify: {
    	my_target: {
      			files: {
        		'js/main.js': ['js/components/*.js', 'bower_components/foundation/js/foundation.min.js']
      				}
    		 }
  	},


    watch: {
		
		options: { livereload: true },
		// Watch Uglify
	  	scripts: {
		files: ['js/components/*.js', 'bower_components/foundation/js/foundation.min.js'],
	  	tasks: ['uglify']  
	  	},
		
		grunt: { files: ['Gruntfile.js'] },
		
		sass: {
		files: 'scss/**/*.scss',
		tasks: ['sass', 'autoprefixer']
		},
		
		html: { files: ['*.php'] },

	 
    }
  });
  

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}