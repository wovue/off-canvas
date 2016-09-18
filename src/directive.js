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
      this.$wv.onOpened = onOpened.bind(this)
      this.$wv.onClosed = onClosed.bind(this)
      this.$wv.toggleOffCanvas = toggleOffCanvas.bind(undefined, this.expression)

      eventBus.on('opened:off-canvas', this.$wv.onOpened)
      eventBus.on('closed:off-canvas', this.$wv.onClosed)
      this.el.addEventListener('click', this.$wv.toggleOffCanvas)
      this.el.setAttribute('aria-expanded', false)
      this.el.setAttribute('aria-controls', this.expression)
    }
  },
  unbind () {
    if (this.arg === 'toggle') {
      eventBus.removeListener('opened:off-canvas', this.$wv.onOpened)
      eventBus.removeListener('closed:off-canvas', this.$wv.onClosed)
      this.el.removeEventListener('click', this.$wv.toggleOffCanvas)
    }
  }
}

function toggleOffCanvas (offCanvasRef) {
  eventBus.emit('toggle:off-canvas', offCanvasRef)
}

function onOpened (offCanvasRef) {
  if (this.expression === offCanvasRef) {
    this.el.setAttribute('aria-expanded', true)
  }
}

function onClosed (offCanvasRef) {
  if (this.expression === offCanvasRef) {
    this.el.setAttribute('aria-expanded', false)
  }
}

export {directive}
export {toggleOffCanvas}
