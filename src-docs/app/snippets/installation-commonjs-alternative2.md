```js
import Vue from 'vue'
import * as OffCanvas from 'wovue-off-canvas'

Vue.component('sidebar', OffCanvas.components.OffCanvas)
Vue.component('sidebar-pusher', OffCanvas.components.OffCanvasWrap)

Vue.directive('sidebar', OffCanvas.directive)
```
