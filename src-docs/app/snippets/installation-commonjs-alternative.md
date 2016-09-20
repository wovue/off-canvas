```js
import * as OffCanvas from 'wovue-off-canvas'

export default {
  // ...
  directives: {
    'off-canvas': OffCanvas.directive
  },
  components: {
    'wv-off-canvas': OffCanvas.components.OffCanvas,
    'wv-off-canvas-wrap': OffCanvas.components.OffCanvasWrap
  },
  // ...
}
```
