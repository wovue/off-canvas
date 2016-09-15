<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Primary</h3>
    <div class="c-item u-gutter">
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper" v-html="snippets.rw01"></div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <div class="c-play-around">
        <wv-off-canvas
          overlay-background="transparent"
          class="nav"
          v-transfer-dom
          wrap-ref="main"
          ref="nav"
          @opened="onOpen"
        >
          <h1>Navigation</h1>
          <a v-off-canvas:toggle="nav" href="/#!/examples/real-world">Link to someplace</a>
        </wv-off-canvas>
        <button v-off-canvas:toggle="nav" type="button">Open Nav</button>
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
      onOpen () {
        window.alert('OffCanvas opened')
      }
    }
  }
</script>

<style lang="scss">
  .nav {
    background-color: #400255;
    color: #ffffff;
    padding: 2rem 0;
    text-align: center;
  }
</style>
