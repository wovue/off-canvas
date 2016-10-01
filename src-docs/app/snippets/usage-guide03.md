```html
<button @click="openOffCanvas">Open</button>
<button @click="closeOffCanvas">Open</button>
<button @click="toggleOffCanvas">Open</button>
```

```js
export default {
  // ...
  methods: {
    openOffCanvas () {
      this.$wv.offCanvas.open('my-off-canvas')
    },
    closeOffCanvas () {
      this.$wv.offCanvas.close('my-off-canvas')
    },
    toggleOffCanvas () {
      this.$wv.offCanvas.toggle('my-off-canvas')
    }
  }
}
```
