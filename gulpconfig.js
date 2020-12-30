/*
  Gulp configuration file.
  inhabited by source & build folder variables
  and gulp task configurations (tasks located in ./gulp/**)
*/

// default working repo setup
var src               = './components',
    content           = src + '/content',
    templates         = src + '/templates',
    assets            = src + '/assets',
    scripts           = src + '/scripts',
    styles            = src + '/styles';

// build repo outside of this project…
var build             = '../offhand.studio.github.io',
    build_assets      = build +  '/assets';

// all gulp task configurations & settings will be found here
module.exports = {
  browserSync: {                                  // https://www.npmjs.com/package/browser-sync
    server: {
      baseDir: build
    },
    files: ["**"],
    port: 1893,
    // https: true,
    open: "local",
    browser: "google chrome"
  },
  metalsmith: {                                   // https://www.npmjs.com/package/metalsmith
    src: src,
    dest: build,
    clean: false,
    metadata: {
      version: "1.32.11",
      title: "Offhand Studio",
      // name: "Offhand Studio",
      shortname: "Offhand",
      // private: true,
      // description: "Offhand Studio gestaltet und entwickelt digitale Marken & Produkte. Wir sind Experten in Corporate Design, UX/UI & CRO, Print & Web Design, Interactive Design, Creative & Art Direction, Design Consultancy, Product Ownership.",
      // author: "Daniel Kurtius",
      site: {
        url: "https://offhand.studio/",
        lang: "de",
        locale: "de_DE",
        // analyticsID: "UA-125802860-1",
        // googleVerification: "G4tJVuRQlcGHRTy4y_2jETky_xATHzAp_Glrw1xi3oQ",
        // "meta-canonical": "https://offhand.io/"
      }
    },
    config: {
      contentRoot: content,
      assetRoot: assets,
      scriptRoot: scripts,
      styleRoot: styles,
      layoutRoot: templates,
      destRoot: build,
    },
    plugins:{
      "metalsmith-discover-helpers": {            // https://www.npmjs.com/package/metalsmith-discover-helpers
        directory: templates + "/helpers",
        files: ['./node_modules/handlebars-helpers/lib/helpers/*.js']
      },
      "metalsmith-drafts": true,                  // https://www.npmjs.com/package/metalsmith-drafts
      "metalsmith-collections": {                 // https://www.npmjs.com/package/metalsmith-collections
        major_pages: {
          sortBy: "rank",
          reverse: false,
        },
        minor_pages: {
          sortBy: "rank",
          reverse: false,
        },
        projects: {
          sortBy: "rank",
          reverse: false,
        }
      },
      "metalsmith-markdown": {                    // https://github.com/segmentio/metalsmith-markdown"
        smartypants: true,
        gfm: true,
        tables: true
      },
      "metalsmith-register-helpers": {            // https://www.npmjs.com/package/metalsmith-register-helpers
        directory: templates + "/helpers"
      },

      "metalsmith-discover-partials": {           // https://www.npmjs.com/package/metalsmith-discover-partials
        directory: templates + "/partials",
      },
      "metalsmith-layouts": {                     // https://www.npmjs.com/package/metalsmith-layouts
        engine: "handlebars",
        directory: templates,
        // partials: templates + "/partials",
        default: "default.hbs",
        rename: true
      },
      "@metalsmith/permalinks" : {
        pattern: ":url",
        relative: false,
        linksets: [
          {
            match: { collection: 'projects' },
            pattern: ':url'
          },
        ]
      },
      // "metalsmith-permalinks": {                  // https://www.npmjs.com/package/metalsmith-permalinks
      //   // pattern: ":url",
      //   // relative: false
      // },
      "metalsmith-sitemap": {                     // https://github.com/ExtraHop/metalsmith-sitemap
        hostname: "https://offhand.studio/",
      }
    }
  },
  scripts: {                                      // just moving & watching
    src: src + "/scripts/**/*.js",
    dest: build + "/js"
  },
  sass: {                                         // https://www.npmjs.com/package/gulp-sass
    src: src + "/styles/**/**",
    dest: build + "/css"
  },
  assets: {                                       // just moving & watching
    src: {
      root: src + "/assets/**",
      imgs: src + "/assets/images/**",
      fonts: src + "/assets/fonts/**",
      meta: src + "/assets/meta/**"
    },
    dest: {
      root: build_assets + "/",
      imgs: build_assets + "/img",
      fonts: build_assets + "/fonts",
      meta: build + "/"
    }
  },
  minifyHTML: {                                   // https://www.npmjs.com/package/gulp-htmlmin
    src:  build + '/**/*.html',
    dest: build,
    options: {
      collapseWhitespace: true,
      removeComments: true
    }
  },
  minifyCSS: {                                    // https://www.npmjs.com/package/gulp-cleancss
    src: build + "/css/**/*.css",
    dest: build + "/css",
    options: {
      debug: true,
      processImport: true,
      // processImportFrom: ["!fonts.googleapis.com"],
      keepSpecialComments: '*' // '*',1,0
    }
  },
  purifyCSS: {                                    // https://github.com/purifycss/gulp-purifycss
    src:  build + "/css/**/*.css",
    dest: build + "/css",
    js:   build + "/**/*.js",
    html: build + "/**/*.html",
    options: {
      // rejected: true
    }
  },
  minifyJS: {                                     // https://www.npmjs.com/package/gulp-uglify
    src: src + "/scripts/**/*.js",
    dest: build + "/js",
    options: {
      preserveComments: 'license'
    }
  },
  minifySVG: {                                    // https://www.npmjs.com/package/gulp-svgo
    src: build_assets + "/img/**/*.svg",
    dest: build_assets + "/img",
  },
  minifyImages: {                                 // https://www.npmjs.com/package/gulp-imagemin
    src:  build_assets + "/img/**/*.{jpg,jpeg,png,gif}",
    dest: build_assets + "/img",
    options: {
      optimizationLevel: 9,
      progessive: true,
      interlaced: true,
      multipass: true
    }
  },
};
