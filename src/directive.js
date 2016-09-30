import {eventBus} from './helpers'

const directive = {
  bind () {
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
    eventBus.on('toggle:directive', this.$wv.onToggle)

    this.el.setAttribute('aria-expanded', false)
    this.el.setAttribute('aria-controls', this.expression)

    if (this.arg === 'toggle') {
      this.$wv.toggleOffCanvas = toggleOffCanvas.bind(undefined, this.expression)
      this.el.addEventListener('click', this.$wv.toggleOffCanvas)
    }

    if (this.arg === 'close') {
      this.$wv.closeOffCanvas = closeOffCanvas.bind(undefined, this.expression)
      this.el.addEventListener('click', this.$wv.closeOffCanvas)
    }

    if (this.arg === 'open') {
      this.$wv.openOffCanvas = openOffCanvas.bind(undefined, this.expression)
      this.el.addEventListener('click', this.$wv.openOffCanvas)
    }
  },
  unbind () {
    eventBus.removeListener('toggle:directive', this.$wv.onToggle)

    if (this.arg === 'toggle') {
      this.el.removeEventListener('click', this.$wv.toggleOffCanvas)
    }

    if (this.arg === 'close') {
      this.el.removeEventListener('click', this.$wv.closeOffCanvas)
    }

    if (this.arg === 'open') {
      this.el.removeEventListener('click', this.$wv.openOffCanvas)
    }
  }
}

function toggleOffCanvas (offCanvasRef) {
  eventBus.emit('toggle:off-canvas', offCanvasRef, 'toggle')
}

function closeOffCanvas (offCanvasRef) {
  eventBus.emit('toggle:off-canvas', offCanvasRef, 'close')
}

function openOffCanvas (offCanvasRef) {
  eventBus.emit('toggle:off-canvas', offCanvasRef, 'open')
}

function onToggle (offCanvas) {
  if (this.expression === offCanvas.ref) {
    this.el.setAttribute('aria-expanded', offCanvas.opened)
  }
}

export {directive, toggleOffCanvas, closeOffCanvas, openOffCanvas}
