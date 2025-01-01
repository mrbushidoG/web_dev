var cssLibs = [
    'css/normalize.css',
    'css/bootstrap.min.css',
    'css/font-awesome.min.css',
    'css/socicon.css',
    'css/magnific-popup.css',
    'css/slick.css',
    'css/slick-theme.css'
];

var cssFiles = {
    'css/styles-default.min.css': cssLibs.concat('css/styles-default.css'),
    'css/styles-blue.min.css': cssLibs.concat('css/styles-blue.css'),
    'css/styles-green.min.css': cssLibs.concat('css/styles-green.css')
};

var lessFiles = {
    'css/styles-default.css': 'css/less/styles-default.less',
    'css/styles-blue.css': 'css/less/styles-blue.less',
    'css/styles-green.css': 'css/less/styles-green.less'
};

var jsLibs = [
    'js/jquery-3.1.1.min.js',
    'js/bootstrap.min.js',
    'js/jquery.fitvids.js',
    'js/jquery.magnific-popup.min.js',
    'js/jquery.sticky-kit.min.js',
    'js/jquery.waypoints.min.js',
    'js/jquery.validate.min.js',
    'js/jquery.validate/additional-methods.min.js',
    'js/slick.min.js',
    'js/retina.js',
    'js/scripts.js'
];

var jsFiles = {
    'js/scripts.min.js': jsLibs
};


module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            all: {
                options: {
                    sourceMap: false
                },
                files: jsFiles
            }
        },
        cssmin: {
            all: {
                options: {
                    shorthandCompacting: true,
                    roundingPrecision: -2,
                    sourceMap: false
                },
                files: cssFiles
            }
        },
        less: {
            all: {
                files: lessFiles
            }
        },
        watch:{
            scripts: {
                files: ['js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            },
            less: {
                files: ['css/less/*.less', 'css/less/configs/*.less', 'css/less/include/*.less'],
                tasks: ['less', 'cssmin'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['css/*.css', '!css/*.min.css'],
                tasks: ['cssmin'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'less', 'cssmin', 'watch']);

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
};