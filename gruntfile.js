module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			options: {
				transform: ['reactify'],
				browserifyOptions: {
					debug: true,
					extensions: [".jsx"]
				}
			},
			dist: {
				files: {
					'build.js': ['main.jsx']
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-browserify");

	grunt.registerTask("default", ["browserify"]);
};
