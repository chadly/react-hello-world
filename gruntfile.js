module.exports = function(grunt) {
	grunt.initConfig({
		webpack: {
			options: {
				module: {
					loaders: [{
						test: /\.jsx$/,
						loader: "jsx-loader"
					}]
				},
				resolve: {
					extensions: ['', '.jsx', '.js', '.json']
				}
			},
			dist: {
				entry: "./main",
				output: {
					filename: "build.js"
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-webpack");

	grunt.registerTask("default", ["webpack"]);
};
