var	packageJson = require('./package.json');

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    trace: true,
                    style: 'compressed'
                },
                files: {
                    '<%= pkg.paths.destination %>/css/main.css': '<%= pkg.paths.sources %>/scss/main.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: packageJson.browserslist,
                // diff: true,
                // safe: false
            },
            dist: {
                files: {
                    '<%= pkg.paths.destination %>/css/main.css':'<%= pkg.paths.sources %>/scss/main.scss'
                }
            }
        },

        uglify: {
            build: {
                expand: true,
                src: ['<%= pkg.paths.sources %>/js/*.js'],
                dest: '<%= pkg.paths.destination %>/js',
                cwd: '.',
                rename: function (dst, src) {
                    // To keep src js files and make new files as *.min.js :
                    return dst + '/' + src.replace('.js', '.min.js').replace('sources/js/', '');
                    // Or to override to src :
                    //return dst;
                }
            }
        },
        
        watch: {
            scripts: {
                files: '<%= pkg.paths.sources %>/js/*.js',
                tasks: ['uglify', 'notify:uglify'],
                options: {
                    spawn: false,
                    livereload: true,
                    debounceDelay: 250
                }
            },
            css: {
                files: '<%= pkg.paths.sources %>/scss/**/*.scss',
                tasks: ['sass', 'autoprefixer', 'notify:sass'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },

        // Notification messages
        notify: {
            sass: {
                options: {
                    title: '<%= pkg.notifications.title %>',
                    message: 'SASS finished running'
                }
            },
            uglify: {
                options: {
                    title: '<%= pkg.notifications.title %>',
                    message: 'Uglify finished running'
                }
            },
            server: {
                options: {
                    title: '<%= pkg.notifications.title %>',
                    message: 'Server starts running....'
                }
            }
        }

    });

    // Load the plugins for tasks
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-bg-shell');
    grunt.loadNpmTasks('grunt-string-replace');

    // Task register  
    grunt.registerTask('default', [
        'notify:server',
        'uglify',
        'sass',
        'watch'
    ]);
};
