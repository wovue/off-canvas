```html
<div>
  <wv-off-canvas-wrap ref="main">
    <!-- content to push -->
    <button v-off-canvas:toggle="otherMenu">Open menu</button>
    <wv-off-canvas class="my-offcanvas" wrap-ref="main" ref="otherMenu" align="right">
      <h1>Ref</h1>
      <button v-off-canvas:toggle="otherMenu" style="...">Close menu</button>
    </wv-off-canvas>
  </wv-off-canvas-wrap>
</div>
```

```scss
.my-off-canvas {
  background-color: #2ecc40;
  padding: 2rem;
}
```
