<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">API</h3>
    <div class="c-item u-gutter">
      <h4 class="c-item__heading">OffCanvas</h4>
      <h5 class="c-item__sub-heading">Props</h5>
      <app-table class="c-item__table" :data="tables.offCanvas.props"></app-table>
      <h5 class="c-item__sub-heading">Events</h5>
      <app-table class="c-item__table" :data="tables.offCanvas.events"></app-table>
      <h4 class="c-item__heading">OffCanvasWrap</h4>
      <div class="c-item__description">
        <p>OffCanvasWrap will push its content, when an OffCanvas references it and it is open.</p>
      </div>
      <h5 class="c-item__sub-heading">Props</h5>
      <app-table class="c-item__table" :data="tables.offCanvasWrap.props"></app-table>
      <h4 class="c-item__heading">Directives</h4>
      <h5 class="c-item__sub-heading">v-off-canvas</h5>
      <app-table class="c-item__table" :data="tables.offCanvas.directive"></app-table>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomePage',
    data () {
      return {
        tables: {
          offCanvasWrap: {
            props: [
              {
                name: 'ref',
                type: 'String',
                required: 'true',
                default: null,
                description: 'OffCanvasWrap identifier.'
              }
            ]
          },
          offCanvas: {
            directive: [
              {
                expression: 'OffCanvas identifier.',
                expects: 'String',
                argument: 'toggle',
                description: 'Toggle the OffCanvas on click.'
              }
            ],
            props: [
              {
                name: 'ref',
                type: 'String',
                required: 'true',
                default: null,
                description: 'OffCanvas identifier.'
              }, {
                name: 'class',
                type: 'String',
                required: 'false',
                default: '`false`',
                description: 'OffCanvas `class` attribute.'
              }, {
                name: 'align',
                type: 'String',
                required: 'false',
                default: '`"left"`',
                description: 'OffCanvas align. It can be `"left"` or `"right"`.'
              }, {
                name: 'width',
                type: 'Number',
                required: 'false',
                default: '`300`',
                description: 'OffCanvas `max-width` style rule.'
              }, {
                name: 'wrapRef',
                type: 'String',
                required: 'false',
                default: '`false`',
                description: 'OffCanvasWrap to push on open OffCanvas.'
              }, {
                name: 'overlayBackground',
                type: 'String',
                required: 'false',
                default: '`"rgba(0, 0, 0, .5)"`',
                description: 'Overlay background color.'
              }
            ],
            events: [
              {
                name: 'opened',
                type: 'emitted',
                description: 'Fired when the OffCanvas is opened. The transition starts.'
              }, {
                name: 'closed',
                type: 'emitted',
                description: 'Fired when the OffCanvas is closed. The transition ends.'
              }
            ]
          }
        }
      }
    }
  }
</script>
