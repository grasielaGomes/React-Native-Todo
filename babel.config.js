module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@pages': './src/pages',
            '@storage': './src/storage',
            '@styles': './src/styles',
          },
        },
      ],
    ],
  }
}
