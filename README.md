# OffCanvas

> OffCanvas (Sidenav/Drawer) component for Vue.js

Create a smooth off-canvas sidebar that slides in and out of the page.

## Live examples & Docs

[https://wovue.github.io/off-canvas](https://wovue.github.io/off-canvas)

## Features

* a11y friendly.
* Support multiples OffCanvas.
* You can optionallity push your content when the OffCanvas is open.

## Getting Started

Install the package using npm

```sh
$ npm install wovue-off-canvas --save
```

Install the plugin

```js
require('wovue-off-canvas/dist/off-canvas.css')

import Vue from 'vue'
import OffCanvas from 'wovue-off-canvas'

Vue.use(OffCanvas)
```

**Note** only with `webpack` you can import `CSS` in javascript.

## Basic Usage

```html
<wv-off-canvas ref="menu">
  <!-- off-canvas content -->
</wv-off-canvas>
<wv-off-cannvas-wrap>
  <!-- content to push -->
  <button v-off-canvas:toggle="menu" type="button">Toggle menu</button>
</wv-off-cannvas-wrap>
```

## Development

``` bash
# install dependencies
npm install

# serve with hot reload src-docs at localhost:8080
npm run dev

# build for production with minification src-docs and src
npm run build

# copy docs folder to gh-pages branch and push
npm run deploy-docs
```
