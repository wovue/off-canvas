<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Real world example</h3>
    <div class="c-item u-gutter">
      <div class="c-item__description">
        <ul>
          <li>Custom width</li>
          <li>Custom styles</li>
          <li>a11y attributes</li>
          <li>Listening to <code>closed</code> event</li>
          <li>Listening to <code>opened</code> event</li>
        </ul>
      </div>
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper" v-html="snippets.rw01"></div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <div class="c-play-around">
        <wv-off-canvas
          class="nav"
          v-transfer-dom
          wrap-ref="main"
          ref="nav"
          overlay-background="transparent"
          role="navigation"
          aria-labelledby="title"
          @closed="onClose"
          @opened="onOpen"
        >
          <button v-off-canvas:toggle="nav">Close</button>
          <h1 id="title">Navigation</h1>
          <a v-off-canvas:toggle="nav" href="https://wovue.github.io/off-canvas/#!/examples/real-world">Link to someplace</a>
        </wv-off-canvas>
        <button v-off-canvas:toggle="nav" type="button">Open</button>
      </div>
    </div>
  </section>
</template>

<script>
  import rw01 from 'src-docs/app/snippets/example-rw-01.md'

  export default {
    name: 'ExamplesRealWorldPage',
    data () {
      return {
        snippets: {
          rw01
        }
      }
    },
    methods: {
      onClose () {
        console.log('OffCanvas closed')
      },
      onOpen () {
        console.log('OffCanvas opened')
      }
    }
  }
</script>

<style lang="scss">
  .nav {
    background-color: #400255;
    color: #ffffff;
    max-width: 25rem;
    padding: 2rem 0;
    text-align: center;
  }
</style>
