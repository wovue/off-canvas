require('./styles/main.scss')

import OffCanvas from './components/OffCanvas'
import OffCanvasWrap from './components/OffCanvasWrap'
import {directive, toggleOffCanvas} from './directive'

let Vue = {}

const offCanvasPlugin = {
  install (_Vue) {
    Vue = _Vue

    // register plugin options
    if (!Vue.prototype.$wv) {
      Vue.prototype.$wv = {}
    }
    Vue.prototype.$wv.offCanvas = {
      toggle: toggleOffCanvas
    }

    Vue.component('wv-off-canvas', OffCanvas)
    Vue.component('wv-off-canvas-wrap', OffCanvasWrap)
    Vue.directive('off-canvas', directive)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('wv-off-canvas', OffCanvas)
  window.Vue.component('wv-off-canvas-wrap', OffCanvasWrap)
  window.Vue.directive('off-canvas', directive)
}
export default offCanvasPlugin
