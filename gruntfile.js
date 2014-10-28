module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			options: {
				transform: ['reactify']
			},
			dist: {
				files: {
					'src/build.js': ['src/main.js', '!src/build.js']
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-browserify");

	grunt.registerTask("default", ["browserify"]);
};
