module.exports = options => ({
  entry: './src/main.ts',  
  presets: [
    require('poi-preset-typescript')()
  ]
})