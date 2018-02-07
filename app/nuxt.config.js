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
    name: 'YO!',
    description: 'Yo'
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
    'assets/app.css',
  ],


  plugins: [
    'plugins/onsen'
  ],

  proxy: [
    'http://localhost:3000/api'
  ]
}
