```html
<wv-off-canvas ref="sidebar" class="my-sidebar">
  <!-- lorem content -->
  <button v-off-canvas:toggle="sidebar">Close</button>
</wv-off-canvas>
<button v-off-canvas:toggle="sidebar">Open</button>
```

```scss
.my-sidebar {
  background-color: #F1524B;
  padding: 2rem;
  color: #ffffff;
}
```
