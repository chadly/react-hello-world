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
					'src/build.js': ['src/main.jsx', '!src/build.js']
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-browserify");

	grunt.registerTask("default", ["browserify"]);
};
