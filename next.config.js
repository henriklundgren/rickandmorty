const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  generateBuildId: async () => 'current',
  basePath: !debug ? '/rickandmorty' : '',
  assetPrefix: !debug ? '/rickandmorty' : '',
};

