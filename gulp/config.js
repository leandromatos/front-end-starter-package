var config = {

    /**
     * Fonts
     */
    'fonts': {
        'src': [
            'node_modules/bootstrap-sass/assets/fonts/bootstrap/*.*',
            'node_modules/font-awesome/fonts/**/*.*',
            'src/fonts/**/*.*'
        ],
        'dest': 'dist/fonts'
    },

    /**
     * Images
     */
    'images': {
        'src': [
            'src/images/**/*.{gif,png,jpg,jpeg,svg,ico,json,xml}',
        ],
        'dest': 'dist/images'
    },

    /**
     * Scripts
     */
    'scripts' : {

        /**
         * Scripts > Formatter
         */
        'formatter': {
            'src' : [
                'src/scripts/**/*.js'
            ],
            'dest': 'src/scripts'
        },

        /**
         * Scripts > Lint
         */
        'lint': {
            'src': [
                'src/scripts/**/*.js'
            ]
        },

        /**
         * Scripts > Browserify
         */
        'browserify': {
            'src': 'src/scripts/app.js',
            'dest': 'dist/scripts/app.js'
        }
    },

    /**
     * Styles
     */
    'styles' : {

        /**
         * Styles > Lint
         */
        'lint': {
            'src' : [
                'src/styles/**/*.scss'
            ]
        },

        /**
         * Styles > Process
         */
        'process': {
            'src': [
                'src/styles/app.scss'
            ],
            'dest': 'dist/styles'
        },

        /**
         * Styles > Build
         */
        'build': {
            'src': [
                'bower_components/animate.css/animate.css',
                'dist/styles/app.css'
            ],
            'dest': 'dist/styles'
        }
    },

    /**
     * Views
     */
    'views': {
        'data': 'src/views/data.json',
        'src': [
            'src/views/index.jade'
        ],
        'dest': 'dist'
    }
};

module.exports = config;
