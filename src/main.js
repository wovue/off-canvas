import component from './component'

let Vue = {}

let OffCanvas = {
  install (_Vue) {
    Vue = _Vue
    Vue.component('off-canvas', component)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('off-canvas', OffCanvas)
}
export default OffCanvas
