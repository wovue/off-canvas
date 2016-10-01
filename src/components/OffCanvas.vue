<template>
  <div :aria-hidden="`${ariaHidden}`">
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
      :class="[class]"
      :style="{maxWidth: offCanvasMaxWidth}"
      v-show="isOpen"
      v-el:off-canvas
      @animationend="onAnimationEnd"
      :transition="transitionClass"
      :aria-labelledby="ariaLabelledby"
      :role="role"
      :id="ref"
    >
      <slot></slot>
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
        default: false
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
        isOpen: false,
        ariaHidden: true
      }
    },
    computed: {
      transitionClass () {
        return `wv-off-canvas-${this.align}`
      },
      offCanvasMaxWidth () {
        if (!this.width) {
          return false
        }

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
        // check if keydown is 'esc'
        if (this.isOpen && event.which === 27 && this.closeOnEsc) {
          event.stopPropagation()
          this.close()
        }
      },
      onToggle (offCanvasRef, actionType) {
        if (this.ref !== offCanvasRef) return

        switch (actionType) {
          case 'toggle': {
            if (this.isOpen) {
              this.close()
            } else {
              this.open()
            }
            break
          }
          case 'close': {
            this.close()
            break
          }
          case 'open': {
            this.open()
            break
          }
          default: {}
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

        this.isOpen = true
        this.ariaHidden = false
        this.$emit('opened')
        // TODO: añadir aria-hidden true al rootEl

        this.$nextTick(() => {
          this.openWrap()
        })
      },
      openWrap () {
        // open OffCanvasWrap

        let offCanvasWidth = this.offCanvasMaxWidth || `${this.$els.offCanvas.getBoundingClientRect().width}px`

        eventBus.emit('toggle:off-canvas-wrap', {
          wrapRef: this.wrapRef,
          offCanvasData: {
            offCanvasWidth: offCanvasWidth,
            offCanvasAlign: this.align
          },
          toOpen: true
        })
      },
      onAnimationEnd () {
        if (!this.isOpen) {
          // toggle aria-expanded
          eventBus.emit('toggle:directive', {
            ref: this.ref,
            opened: false
          })

          this.ariaHidden = true
          this.$emit('closed')
          // TODO: añadir aria-hidden false al rootEl
        }
      }
    }
  }
</script>
