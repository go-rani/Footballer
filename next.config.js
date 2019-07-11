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
      '/myteam': { page: '/myteam' },
      '/profile': { page: '/profile' },
      '/team/[id]': { page: '/team/[id]' },
      '/teamreg': { page: '/teamreg' },
      '/search': { page: '/search' },
      '/privacy': { page: '/privacy' },
      '/agreement': { page: '/agreement' },
      '/company': { page: '/company' },
    }
  }
}
