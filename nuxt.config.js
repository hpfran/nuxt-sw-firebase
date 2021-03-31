
module.exports = {
  mode: 'universal',
  telemetry: false,
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome',
    '~/plugins/cloudinary'
  ],
  router: {
    middleware: 'authenticated'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  bootstrapVue: {
    componentPlugins: [
      'Navbar',
      'Button',
      'FormInput',
      'Form',
      'ListGroup',
      'Card',
      'Layout',
      'Badge',
      'FormGroup',
    ]
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyBjQMvyeOGm-nVWov6LrShyjyFDgavVFYE',
      authDomain: 'mystream-a6e3f.firebaseapp.com',
      projectId: 'mystream-a6e3f',
      storageBucket: 'mystream-a6e3f.appspot.com',
      messagingSenderId: '527155936045',
      appId: '1:527155936045:web:d1c615895a6cf45a5af1a4',
      databaseURL: 'https://mystream-a6e3f.firebaseio.com',
    },
    services: {
      firestore: true,
      realtimeDb: true,
      auth: {
        ssr: true,
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged'
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
