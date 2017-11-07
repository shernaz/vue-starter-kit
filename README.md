# Vue Typescript Starter
[![MIT License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/gingerpayments/ginger-php/blob/master/LICENSE)
> Opinionated Vue TypeScript starter kit for building medium/large applications

## Contents

* [Setup](#setup)
* [Project structure](#project-structure)
* [NPM Scripts](#npm-scripts)
* [Style guide](#style-guide)
* [Dependencies](#dependencies)
* [devDependencies](#devdependencies)
* [Contributing](#contributing)

## Setup

Make sure you have [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com) installed and run the following snippet: 

```bash
git clone https://github.com/gingerpayments/vue-ts-starter
cd vue-ts-starter
yarn setup
```

## Project structure

    .
    ├── dist (git ignored)          # Folder where the production build will be stored
    ├── node_modules (git ignored)  # (Dev)Dependencies folder 
    ├── src                         # Source files
    |   ├── api                     # Folder for talking to api's
    |   ├── assets                  # Folder where we store assets which will go through webpack loaders
    |   ├── components              # Folder for components
    |   ├── localization            # Folder for localization files/code
    |   ├── router                  # Folder where we define the routes
    |   ├── store                   # Folder for state management code
    |   ├── views                   # Folder for views 
    |   ├── App.vue                 # Root Vue file
    |   └── main.ts                 # Bootstrap/Webpack entry file
    ├── static                      # Here we store static assets like favicons
    ├── test                        # Automated tests
    |   ├── unit                    # Unit tests
    |   └── e2e                     # E2E tests 
    ├── types                       # Folder for TypeScript declaration files
    ├── .gitignore                  # File where determine what which files/folders we version control
    ├── package.json                # (Dev)Dependencies registry file and task runner commands (scripts)
    ├── poi.config.json             # Config file of which presets we use and here we can extend the Webpack config
    ├── README.md                   # You are currently reading it
    ├── stats.json (git ignored)    # This file will only exist when we run the analyze command
    ├── tsconfig.json               # TypeScript config file
    ├── tslint.json                 # TSLint config File
    └── yarn.lock                   # Yarn lock file 

## NPM Scripts

We use the scripts in package.json as a simple task runner

| Commands      | Description                                                                       |
| ------------- |-----------------------------------------------------------------------------------|
| analyze       | Runs build command and analyzes bundle size                                       |
| build         | Production build in dist folder (creates this if not existent)                    |
| e2e           | Runs E2E tests for all installed browsers                                         |
| headless      | Runs E2E tests without opening a browser (using Firefox or Chrome headless mode)  |
| lint          | Runs tslint and automatically fixes all the simple errors                         |
| precommit     | This is a pre commit git hook, where we run the lint/unit/e2e(headless)           |
| reset         | This will delete the dist and node_modules folder and reinstalls the dependencies |
| setup         | Will install the (dev)dependencies, remove .git folder and run git init           |
| start         | This will start the development server with hot module reload                     |
| test          | Runs the unit tests                                                               |

## Style guide

We use the official [Vue.js style guide](https://vuejs.org/v2/style-guide/)

## Dependencies

| Library | Description | License |
| ----- |-------|---------|
| [Axios](https://github.com/axios/axios) | Promise based HTTP client  | [MIT License](https://github.com/axios/axios/blob/master/LICENSE) |
| [Apisause](https://github.com/infinitered/apisauce) | Axios + standardized errors + request/response transforms | [MIT License](https://github.com/infinitered/apisauce/blob/master/LICENSE) |
| [vue](https://vuejs.org) | Progressive JavaScript Framework | [MIT License](https://github.com/vuejs/vue/blob/dev/LICENSE) |
| [vue-router](https://router.vuejs.org/en/) | Official Router Package for Vue.js | [MIT License](https://github.com/vuejs/vue-router/blob/dev/LICENSE) |
| [vue-class-component](https://github.com/vuejs/vue-class-component) | TypeScript decorator for class-style Vue components | [MIT License](https://github.com/vuejs/vue-class-component/blob/dev/LICENSE) |
| [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) | Vue property decorator | [MIT License]() |
| [vue-i18n](https://kazupon.github.io/vue-i18n/en/installation.html)| Internationalization plugin Vue.js | [MIT License](https://github.com/kazupon/vue-i18n/blob/dev/LICENSE) |
| [vuex](https://vuex.vuejs.org/en/getting-started.html) | Centralized State Management for Vue.js | [MIT License](https://github.com/vuejs/vuex/blob/dev/LICENSE) |
| [vuex-class](https://github.com/ktsn/vuex-class) | Binding helpers for vuex/vue-class-component | [MIT License](https://github.com/ktsn/vuex-class/blob/master/LICENSE) |

## devDependencies

| Library | Description | License |
| ----- |-------|---------|
| [Poi](https://poi.js.org/#/) | Config free Webpack setup (but extendable with [Webpack Chain](https://github.com/mozilla-neutrino/webpack-chain)) | [MIT License](https://github.com/egoist/poi/blob/master/LICENSE) |
| [TypeScript](https://www.typescriptlang.org) | Typed superset of JavaScript |[Apache License 2.0](https://github.com/Microsoft/TypeScript/blob/master/LICENSE.txt) |
| [TSLint](https://palantir.github.io/tslint/) | TypeScript Linter | [Apache License 2.0](https://github.com/palantir/tslint/blob/master/LICENSE) |
| [Husky](https://github.com/typicode/husky) | Easy git hooks in package.json |[MIT License](https://github.com/typicode/husky/blob/master/LICENSE) |
| [TestCafe](https://github.com/DevExpress/testcafe) | E2E test framework (without selenium dependency :relieved: ) | [MIT License](https://github.com/DevExpress/testcafe/blob/master/LICENSE) |
| [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) | Analyzes the webpack produced bundle size | [MIT License](https://github.com/webpack-contrib/webpack-bundle-analyzer/blob/master/LICENSE) |
| [Jest](https://github.com/facebook/jest) | JavaScript Test Solution | [MIT License](https://github.com/facebook/jest/blob/master/LICENSE) |
| [TS-Jest](https://github.com/kulshekhar/ts-jest) | Jest TypeScript Transformer | [MIT License](https://github.com/kulshekhar/ts-jest/blob/master/LICENSE) |
| [Vue-Jest](https://github.com/eddyerburgh/vue-jest) | Jest Vue Transformer | [MIT License](https://github.com/eddyerburgh/vue-jest/blob/master/LICENSE) |
| [Vue-test-utils](https://github.com/vuejs/vue-test-utils) | Utilities for testing Vue Components | [MIT License](https://github.com/vuejs/vue-test-utils/blob/dev/LICENSE) |