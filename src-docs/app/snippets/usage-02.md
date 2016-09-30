```html
<wv-off-canvas-wrap ref="main">
  <!-- content to push -->
  <button v-off-canvas:toggle="otherMenu">Open</button>

  <wv-off-canvas class="my-offcanvas" wrap-ref="main" ref="otherMenu" align="right">
    <h1>Other menu</h1>
    <button v-off-canvas:toggle="otherMenu" style="...">Close</button>
  </wv-off-canvas>
</wv-off-canvas-wrap>
```

```scss
.my-off-canvas {
  background-color: #2ecc40;
  padding: 2rem;
}
```
