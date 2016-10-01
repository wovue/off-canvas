```html
<wv-off-canvas-wrap ref="main">
  ...
  <button v-off-canvas:toggle="nav">Open</button>
  ...
</wv-off-canvas-wrap>

<wv-off-canvas
  class="nav"
  ref="nav"
  wrap-ref="main"
  overlay-background="transparent"
  role="navigation"
  aria-labelledby="title"
  @opened="onOpen"
  @closed="onClose"
>
  <button v-off-canvas:toggle="nav">Close</button>
  <h1 id="title">Navigation</h1>
  <a v-off-canvas:toggle="nav">Link to someplace</a>
</wv-off-canvas>
```

```js
export default {
  // ...
  methods: {
    onOpen () {
      console.log('OffCanvas opened')
    },
    onClose () {
      console.log('OffCanvas closed')
    }
  }
}
```

```scss
.nav {
  background-color: #400255;
  color: #ffffff;
  max-width: 25rem;
  padding: 2rem 0;
  text-align: center;
}
```
