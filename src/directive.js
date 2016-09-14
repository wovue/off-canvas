import {eventBus} from './helpers'
import eve from 'dom-events'

const directive = {
  bind () {
    // validations
    if (!this.expression) {
      console.error(`[off-canvas]: Expected a Value, got '${this.expression}'. (found in ${this.vm.constructor.name})`)
    }
    if (typeof this.expression !== 'string') {
      console.error(`[off-canvas]: Expected String, got ${typeof this.expression}. (found in ${this.vm.constructor.name})`)
    }

    if (this.arg === 'toggle') {
      eve.on(this.el, 'click', toggleOffCanvas.bind(undefined, this.expression))
    }
  },
  unbind () {
    if (this.arg === 'toggle') {
      eve.off(this.el, 'click', toggleOffCanvas.bind(undefined, this.expression))
    }
  }
}

function toggleOffCanvas (offCanvasRef) {
  eventBus.emit('toggle:off-canvas', offCanvasRef)
}

export default directive
