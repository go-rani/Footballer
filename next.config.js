const dotEnvResult = require('dotenv').config()

const prod = process.env.NODE_ENV === 'production'

if (dotEnvResult.error) {
  throw dotEnvResult.error
}

module.exports = {
  env: {
    TEST: process.env.TEST,
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  },

  webpack: function (cfg) {
    const originalEntry = cfg.entry
    cfg.entry = async () => {
      const entries = await originalEntry()

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./client/polyfills.js')
      ) {
        entries['main.js'].unshift('./client/polyfills.js')
      }

      return entries
    }

    return cfg
  },
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/profile': { page: '/profile' },
      '/myteams': { page: '/myteams' },
      '/teams': { page: '/teams' },
      '/teach': { page: '/teach' },
      '/teamreg': { page: '/teamreg' },
      '/regconfirm': { page: '/regconfirm' },
      '/teachList': { page: '/teachList' },
      '/teamList': { page: '/teamList' },
      '/privacy': { page: '/privacy' },
      '/agreement': { page: '/agreement' },
      '/company': { page: '/company' },
    }
  }
}
