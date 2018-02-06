const { resolve } = require('path')

module.exports = {
  // Nuxt modules
  modules: [
    'nuxt7',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  srcDir: __dirname,
  buildDir: resolve(__dirname, '.nuxt'),

  manifest: {
    name: 'Contact Book',
    description: 'My Contact Book'
  },

  // Framework7 Config
  framework7: {
    f7Icons: false,
    mdIcons: false,
    on: {
      init() {
        this.$app.root.removeClass('theme-dark theme-light').addClass('theme-dark');
        let currentColorClass = app.root[0].className.match(/color-theme-([a-z]*)/);
        if (currentColorClass) app.root.removeClass(currentColorClass[0])
          app.root.addClass('color-theme-red');
      }
    }
  },

  // Build configuration
  build: {
    // Extract CSS in a separated file
    extractCSS: true,

    // You can extend webpack config here
    extend (config) {
      // ...
    }
  },

  // Additional CSS configuration
  css: [
    'assets/app.css'
  ],


  plugins: [
    'plugins/icons.js'
  ],

  proxy: [
    'http://localhost:3000/api'
  ]
}
