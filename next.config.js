module.exports = {
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
      '/teamreg': { page: '/teamreg' },
      '/regconfirm': { page: '/regconfirm' },
      '/search': { page: '/search' },
      '/privacy': { page: '/privacy' },
      '/agreement': { page: '/agreement' },
      '/company': { page: '/company' },
    }
  }
}
