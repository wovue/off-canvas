<template>
  <div class="c-off-canvas-wrap" :style="{overflow: isOpen ? 'hidden' : false}">
    <div class="c-off-canvas-wrap__content" :style="{transform: contentTransform}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../helpers'

  export default {
    props: [
      {
        name: 'ref',
        type: String,
        required: true
      }
    ],
    data () {
      return {
        isOpen: false,
        // current offCanvas data
        offCanvasWidth: 0,
        offCanvasAlign: ''
      }
    },
    computed: {
      contentTransform () {
        if (this.isOpen) {
          if (this.offCanvasAlign === 'right') {
            return `translate3d(-${this.offCanvasWidth}, 0, 0)`
          }
          return `translate3d(${this.offCanvasWidth}, 0, 0)`
        }
        return ''
      }
    },
    ready () {
      eventBus.on('toggle:off-canvas-wrap', this.onToggle)
    },
    beforeDestroy () {
      eventBus.removeListener('toggle:off-canvas-wrap', this.onToggle)
    },
    methods: {
      onToggle ({wrapRef, offCanvasData, toOpen}) {
        if (this.ref === wrapRef) {
          if (toOpen) {
            this.open(offCanvasData)
          } else {
            this.close()
          }
        }
      },
      close () {
        this.isOpen = false
      },
      open ({offCanvasWidth, offCanvasAlign}) {
        this.offCanvasWidth = offCanvasWidth
        this.offCanvasAlign = offCanvasAlign

        this.isOpen = true
      }
    }
  }
</script>
