```html
<div>
  <wv-off-canvas-wrap ref="main">
    <button v-off-canvas:toggle="nav">Open Nav</button>
  </wv-off-canvas-wrap>

  <wv-off-canvas
    class="nav"
    ref="nav"
    wrap-ref="main"
    overlay-background="transparent"
    @opened="onOpen"
    @closed="onClose"
  >
    <h1>Navigation</h1>
    <a v-off-canvas:toggle="nav">Link to someplace</a>
  </wv-off-canvas>
</div>
```

```js
export default {
  // ...
  methods: {
    onOpen () {
      window.alert('OffCanvas opened')
    },
    onClose () {
      window.alert('OffCanvas closed')
    }
  }
}
```

```scss
.nav {
  background-color: #400255;
  color: #ffffff;
  padding: 2rem 0;
  text-align: center;
}
```
