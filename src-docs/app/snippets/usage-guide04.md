```html
<button @click="openOffCanvas">Open</button>
<button @click="closeOffCanvas">Open</button>
<button @click="toggleOffCanvas">Open</button>
```

```js
import {toggleOffCanvas, closeOffCanvas, openOffCanvas} from 'wovue-off-canvas'

export default {
  // ...
  methods: {
    openOffCanvas () {
      openOffCanvas('my-off-canvas')
    },
    closeOffCanvas () {
      closeOffCanvas('my-off-canvas')
    },
    toggleOffCanvas () {
      toggleOffCanvas('my-off-canvas')
    }
  }
}
```
