<template>
  <div :aria-hidden="`${!isOpen}`">
    <div
      class="c-off-canvas-overlay"
      :style="{backgroundColor: overlayBackground}"
      @click.stop="close"
      v-if="isOpen"
      transition="wv-off-canvas-overlay"
      tabindex="-1"
    ></div>
    <div
      class="c-off-canvas"
      :style="{maxWidth: offCanvasMaxWidth}"
      v-show="isOpen"
      @animationend="onAnimationEnd"
      :transition="transitionClass"
      :aria-labelledby="ariaLabelledby"
      :role="role"
      :id="ref"
    >
      <div class="c-off-canvas__content" :class="[class]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../helpers'

  export default {
    props: [
      {
        name: 'overlayBackground',
        type: String,
        default: 'rgba(0, 0, 0, .5)'
      }, {
        name: 'class',
        type: String,
        default: false
      }, {
        name: 'align',
        type: String,
        default: 'left'
      }, {
        name: 'width',
        type: [Number, String],
        default: 300
      }, {
        name: 'ref',
        type: String,
        required: true
      }, {
        name: 'closeOnEsc',
        type: Boolean,
        default: true
      }, {
        name: 'closeOnOutsideClick',
        type: Boolean,
        default: true
      }, {
        name: 'wrapRef',
        type: String,
        default: false
      }, {
        name: 'role',
        type: String,
        default: false
      }, {
        name: 'ariaLabelledby',
        type: String,
        default: false
      }
    ],
    data () {
      return {
        isOpen: false
      }
    },
    computed: {
      transitionClass () {
        return `wv-off-canvas-${this.align}`
      },
      offCanvasMaxWidth () {
        if (typeof this.width === 'number') {
          return `${this.width}px`
        }

        if (typeof this.width === 'string') {
          return this.width
        }
      }
    },
    ready () {
      eventBus.on('toggle:off-canvas', this.onToggle)
      document.addEventListener('keydown', this.onKeyDown)
    },
    beforeDestroy () {
      eventBus.removeListener('toggle:off-canvas', this.onToggle)
      document.removeEventListener('keydown', this.onKeyDown)
    },
    methods: {
      onKeyDown (event) {
        // check if the key is 'escape'
        if (this.isOpen && event.which === 27 && this.closeOnEsc) {
          event.stopPropagation()
          this.close()
        }
      },
      onToggle (offCanvasRef) {
        if (this.ref === offCanvasRef) {
          if (this.isOpen) {
            this.close()
          } else {
            this.open()
          }
        }
      },
      close (event) {
        if (event) {
          if (!this.closeOnOutsideClick) {
            return
          }
        }

        eventBus.emit('toggle:off-canvas-wrap', {
          wrapRef: this.wrapRef,
          toOpen: false
        })

        this.isOpen = false
      },
      open () {
        // toggle aria-expanded
        eventBus.emit('toggle:directive', {
          ref: this.ref,
          opened: true
        })

        eventBus.emit('toggle:off-canvas-wrap', {
          wrapRef: this.wrapRef,
          offCanvasData: {
            offCanvasWidth: this.offCanvasMaxWidth,
            offCanvasAlign: this.align
          },
          toOpen: true
        })

        this.isOpen = true
        this.$emit('opened')
      },
      onAnimationEnd () {
        if (!this.isOpen) {
          // toggle aria-expanded
          eventBus.emit('toggle:directive', {
            ref: this.ref,
            opened: false
          })

          this.$emit('closed')
        }
      }
    }
  }
</script>
