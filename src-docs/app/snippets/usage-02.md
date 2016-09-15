```html
<div>
  <wv-off-canvas-wrap ref="main">
    <!-- content to push -->
  </wv-off-canvas-wrap>
</div>
```

```html
<div>
  <button v-off-canvas:toggle="otherMenu">Open menu</button>
  <wv-off-canvas class="my-offcanvas" ref="otherMenu" align="right">
    <h1>Ref</h1>
    <button v-off-canvas:toggle="otherMenu" style="background: #ff4136; color: white">Close menu</button>
  </wv-off-canvas>
</div>
```

```scss
.my-off-canvas {
  background-color: #2ecc40;
  padding: 2rem;
}
```
