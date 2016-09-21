import {eventBus} from './helpers'

const directive = {
  bind () {
    if (this.arg === 'toggle') {
      // validations
      if (!this.expression) {
        console.error(`[off-canvas]: Expected a Value, got '${this.expression}'. (found in ${this.vm.constructor.name})`)
      }
      if (typeof this.expression !== 'string') {
        console.error(`[off-canvas]: Expected String, got ${typeof this.expression}. (found in ${this.vm.constructor.name})`)
      }

      // bindings
      // http://stackoverflow.com/questions/14417890/does-bind-change-the-function-reference-how-to-set-permanently?lq=1
      this.$wv = {}
      this.$wv.onToggle = onToggle.bind(this)
      this.$wv.toggleOffCanvas = toggleOffCanvas.bind(undefined, this.expression)

      eventBus.on('toggle:directive', this.$wv.onToggle)
      this.el.addEventListener('click', this.$wv.toggleOffCanvas)

      this.el.setAttribute('aria-expanded', false)
      this.el.setAttribute('aria-controls', this.expression)
    }
  },
  unbind () {
    if (this.arg === 'toggle') {
      eventBus.removeListener('toggle:directive', this.$wv.onToggle)
      this.el.removeEventListener('click', this.$wv.toggleOffCanvas)
    }
  }
}

function toggleOffCanvas (offCanvasRef) {
  eventBus.emit('toggle:off-canvas', offCanvasRef)
}

function onToggle (offCanvas) {
  if (this.expression === offCanvas.ref) {
    this.el.setAttribute('aria-expanded', offCanvas.opened)
  }
}

export {directive, toggleOffCanvas}
