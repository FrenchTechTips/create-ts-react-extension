# create-ts-react-extension

# React & Redux & Tailwind bundle Web Extension Template  
<img alt="Logo" align="right" src="https://create-react-app.dev/img/logo.svg" width="20%" />

Create React & Redux & Tailwind bundle Web Extension Template with no config.

- [Creating an App](#creating-an-app) – How to create a new app.
- [User Guide](https://FrenchTechTips.github.io/create-react-extension/) – How to develop apps bootstrapped with Create React App.

create-ts-react-extension works on Firefox, Chrome.<br>
If something doesn’t work, please [file an issue](https://github.com/FrenchTechTips/create-react-extension/issues/new).<br>
If you have questions or need help, please ask in [GitHub Discussions](https://github.com/FrenchTechTips/create-react-extension/discussions).


## Authors

- [@Hokanosekai](https://github.com/Hokanosekai)
- [@FTT](https://github.com/FrenchTechTips)


## Quick Overview

```sh
npx create-ts-react-extension my-app
cd my-app
npm install
npm run build
npm run web-run:firefox
```



Then click on the extension popup.<br>

//GIF TERMIANL CREATE APP

### Get Started Immediately

You **don’t** need to install or configure tools like webpack or Babel.<br>

You **can** modify your prefered manifest config
```
├── manifest
│   ├── beta-manifest-extra.json
│   ├── chrome-manifest-extra.json
│   ├── firefox-beta-manifest-extra.json
│   ├── firefox-manifest-extra.json
│   ├── manifest.json
│   └── safari-manifest-extra.json
...
```

Create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node 14.0.0 or later version, Firefox and Chromium if you want to dev on chrome on your local development machine** . We recommend using the latest LTS version. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-ts-react-extension my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init ts-react-extension my-app
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create create-ts-react-extension my-app
```

_[`yarn create <starter-kit-package>`](https://yarnpkg.com/lang/en/docs/cli/create/) is available in Yarn 0.25+_

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
.
├── dist
│   ├── assets
│   │   └── icons
│   │       ├── bmac2.png
│   │       ├── bmac.png
│   │       ├── github.png
│   │       └── ytb.png
│   ├── css
│   │   └── style.css
│   ├── js
│   │   ├── background.js
│   │   ├── browser-polyfill.js
│   │   ├── content.js
│   │   ├── options.js
│   │   ├── popup.js
│   │   └── vendor.js
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── options
│   │   └── options.html
│   └── popup.html
├── manifest
│   ├── beta-manifest-extra.json
│   ├── chrome-manifest-extra.json
│   ├── firefox-beta-manifest-extra.json
│   ├── firefox-manifest-extra.json
│   ├── manifest.json
│   └── safari-manifest-extra.json
├── package.json
├── package-lock.json
├── public
│   ├── assets
│   │   └── icons
│   │       ├── bmac2.png
│   │       ├── bmac.png
│   │       ├── github.png
│   │       └── ytb.png
│   ├── css
│   │   └── style.css
│   ├── logo192.png
│   ├── logo512.png
│   ├── options
│   │   └── options.html
│   └── popup.html
├── README.md
├── src
│   ├── background.ts
│   ├── components
│   │   ├── options
│   │   │   ├── Footer.tsx
│   │   │   └── Options.tsx
│   │   ├── popup
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   └── Popup.tsx
│   ├── content-script.ts
│   ├── css
│   │   └── index.css
│   ├── options.ts
│   ├── popup.ts
│   ├── react-app-env.d.ts
│   ├── redux
│   │   ├── Actions.ts
│   │   ├── ActionsTypes.ts
│   │   ├── reducers
│   │   │   ├── index.ts
│   │   │   └── MessageState.ts
│   │   └── store.ts
│   ├── render
│   │   ├── OptionsRenderer.tsx
│   │   └── PopupRenderer.tsx
│   ├── serviceWorker.ts
│   ├── types.ts
│   └── utils
│       └── utils.ts
├── tailwind.config.cjs
├── tsconfig.json
└── webpack
    ├── webpack.common.js
    ├── webpack.dev.js
    ├── webpack.manifest.cjs
    └── webpack.prod.js
```

<br>
Once the installation is done, you can open your project folder:
<br>


```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm "build:watch:firefox"` 

Runs the app in watch mode and open a .<br>

Wait Firefox to load.

The addon will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console of the developpment tool section.

//GIF

### `npm test`


No test implementation yet.<br>


### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React & Tailwinds in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.


## What’s Included?

Your environment will have everything you need to build a modern single-page React app:

- React, JSX, ES6, TypeScript, Eslint, Tailwind and Flow syntax support.
- Language extras beyond ES6 like the object spread operator.
- Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
- A build script to bundle manifest, JS, HTML Template for production, with hashes and sourcemaps.

- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.

Check out [this guide](https://github.com/nitishdayal/cra_closer_look) for an overview of how these tools fit together.

The tradeoff is that **these tools are preconfigured to work in a specific way**. If your project needs more customization, you can ["eject"](https://FrenchTechTips.github.io/create-ts-react-extension/docs/available-scripts#npm-run-eject) and customize it, but then you will need to maintain this configuration.


## Contributing

We'd love to have your helping hand on `create-ts-react-extension`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## Supporting Create React App

Create React App is a community maintained project and all contributors are volunteers. If you'd like to support the future development of Create React App then please consider donating to our [Open Collective](https://opencollective.com/create-ts-react-extension).






## License

Create React App is open source software [licensed as MIT](https://github.com/FrenchTechTips/create-ts-react-extension/blob/main/LICENSE). The Create React App logo is licensed under a [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).
