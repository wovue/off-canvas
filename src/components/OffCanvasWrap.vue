<template>
  <div class="c-off-canvas-wrap">
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
            return `translate3d(-${this.offCanvasWidth}px, 0, 0)`
          }
          return `translate3d(${this.offCanvasWidth}px, 0, 0)`
        }
        return ''
      }
    },
    ready () {
      eventBus.on('open:off-canvas-wrap', this.onOpen)
      eventBus.on('close:off-canvas-wrap', this.onClose)
    },
    beforeDestroy () {
      eventBus.removeListener('open:off-canvas-wrap', this.onOpen)
      eventBus.removeListener('close:off-canvas-wrap', this.onClose)
    },
    methods: {
      onOpen (offCanvasData, wrapRef) {
        if (this.ref === wrapRef) {
          this.open(offCanvasData)
        }
      },
      onClose (wrapRef) {
        if (this.ref === wrapRef) {
          this.close()
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
