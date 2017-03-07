/*global module:false*/

module.exports = function(grunt) {

  grunt.initConfig({
	// myth: {
	//   compile: {
	// 	expand: true,
	// 	cwd: 'css',
	// 	src: ['*.css', '!*.min.css'],
	// 	dest: 'css',
	// 	ext: '.css'
	//   },
	//   release: {
	// 	files: {
	// 		'dist/lib/flexgrid.css': 'src/css/flexboxgrid.css'
	// 	}
	//   }
	// },
	
	sass: {
		options: {
			// sourceMap: true
		},
		dist: {
			files: {
				'dist/lib/flexgrid.css': 'src/lib/flexgrid.scss'
			}
		}
	},
	
	cssmin: {
	  testpage_concat: {
		files: {
			'css/index.css': ['src/css/style.css', 'dist/lib/flexgrid.css']
		}
	  },
	
	 // release: {
		// expand: true,
		// cwd: 'dist',
		// src: ['*.css', '!*.min.css'],
		// dest: 'dist',
		// ext: '.min.css'
	 // },
	 
	 releaselib: {
		files: {
		  'dist/lib/flexgrid.min.css': 'dist/lib/flexgrid.css'
		}
	  }
	},
	// uglify: {
	//   release: {
	// 	files: {
	// 	  'js/index.js': 'src/js/index.js'
	// 	}
	//   }
	// },
	processhtml: {
	  dist: {
		options: {
		  process: true
		},
		files: {
		  'dist/test/index.html': ['src/index.html']
		}
	  }
	},
	htmlmin: {
	  dist: {
		options: {
		  removeComments: true,
		  collapseWhitespace: true
		},
		files: {
		  'dist/test/index.html': ['dist/test/index.html']
		}
	  }
	},
	
	clean: {
		testpage_css_files: ['css/']
	},
	
	watch: {
	  sources: {
		files: 'src/**/*',
		tasks: ['default'],
	  }
	 // , livereload: {
		// options: {
		//   livereload: true,
		// },
		// files: [
		//   // 'index.html',
		//   // 'css/*.css'
		//   // 'js/*.js',
		//   // 'img/*'
		// ]
	 //  }
	}
  });

  // These plugins provide necessary tasks.
  // grunt.loadNpmTasks('grunt-myth');
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', [
	// 'myth',
	'sass',
	'cssmin:testpage_concat',
	'cssmin:releaselib',
	// 'uglify',
	'processhtml',
	'htmlmin',
	'clean:testpage_css_files'
  ]);
  grunt.registerTask('reload', ['watch']);

};
