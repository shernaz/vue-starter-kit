# Multiple application setup

If you want to set up more than one app (for example let's say a merchant and a admin portal), than you can change the poi.config.js file to the following config:

```javascript
let config = {
  presets: [
    require('poi-preset-typescript')()
  ]
};

const merchantConfig = Object.assign({}, config, {
  entry: './src/merchant.ts',
  dist: 'dist/merchant/',  
})

const adminConfig = Object.assign({}, config, {
  entry: './src/admin.ts',
  dist: 'dist/admin/',  
})

if (process.env.GINGER_APP === 'ADMIN') {
  module.exports = options => (adminConfig)
}
else {
  module.exports = options => (merchantConfig)  
}
```

However you should also think about restructering the src map between the portals and a shared assets/components folder. Don't forgot to change the npm scripts so you can run/build one or multiple apps at the same time. You can also extend this to the E2E/unit tests, but to show a small example how this would look:

```javascript
  "scripts": {
    "build": "yarn build:admin && yarn build:merchant",
    "build:admin": "export GINGER_APP='ADMIN' && yarn poi build",
    "build:merchant": "export GINGER_APP='MERCHANT' && yarn poi build",
    "start": "yarn start:admin & yarn start:merchant",
    "start:admin": "yarn poi --port=4000",
    "start:merchant": "yarn poi --port=4001",
  },
```