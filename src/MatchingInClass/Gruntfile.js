/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
	grunt.initConfig({
		bower: {
			install: {
				options: {
					targetDir: "wwwroot/lib",
					layout: "byComponent",
					cleanTargetDir: false
				}
			}
		},
		// Add this JSON object:
		less: {
			development: {
				options: {
					paths: ["assets"],
				},
				files: { "wwwroot/css/styles.css": "assets/*.less" }
			},
		},
		watch: {
			less: {
				// We watch and compile less files as normal but don't live reload here 
				files: ['assets/*.less'],
				tasks: ['less'],
			}
		}
	});
	grunt.registerTask("default", ["bower:install"]);
	grunt.loadNpmTasks("grunt-bower-task");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
};