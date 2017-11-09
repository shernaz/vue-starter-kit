# Adding PostCSS Plugins

Adding PostCSS plugins is something you probably want to do and it is really easy. Just look for the right plugin(s) on [PostCSS repository](https://github.com/postcss/postcss) or [PostCSS search catalog](https://www.postcss.parts), install them with yarn and add the plugin(s) to the postcss.config.js file. For example if you want to install [PreCSS](https://github.com/jonathantneal/precss):

```bash
yarn add --dev precss
```

```javascript
module.exports = {
  autoprefixer: {
    browsers: ['ie > 8', 'last 3 versions']
  },
  plugins: {
    'precss': {},    
  }    
}
```
