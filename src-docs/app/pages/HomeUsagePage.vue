<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Usage</h3>
    <div class="c-item u-gutter">
      <h4 class="c-item__heading">OffCanvas</h4>
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper" v-html="snippets.usage01"></div>
      <div class="c-item__description">
        <p>That's it!</p>
      </div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <div class="c-play-around">
        <button v-off-canvas:toggle="menu">Open</button>
        <wv-off-canvas ref="menu">
          <h1>Menu</h1>
          <button v-off-canvas:toggle="menu">Close</button>
        </wv-off-canvas>
      </div>
      <h4 class="c-item__heading">OffCanvasWrap</h4>
      <div class="c-item__description">
        <p>You can optionally push your content when the <code>OffCanvas</code> is open, wrapping your content with the <code>OffCanvasWrap</code> component</p>
      </div>
      <div class="c-item__code-wrapper" v-html="snippets.usage02"></div>
      <div class="c-play-around">
        <button v-off-canvas:toggle="otherMenu">Open</button>
        <wv-off-canvas class="my-offcanvas" wrap-ref="main" ref="otherMenu" align="right">
          <h1>Other menu</h1>
          <button v-off-canvas:toggle="otherMenu">Close</button>
        </wv-off-canvas>
      </div>
      <div class="c-item__description">
        <p>and that's it!...... oohhh wait</p>
        <p>This is a <code>'transform'</code> + <code>'position: fixed'</code> <a href="http://stackoverflow.com/questions/15194313/webkit-css-transform3d-position-fixed-issue">issue</a></p>
        <p>We can fix it moving the <code>OffCanvas</code> outside the <code>OffCanvasWrap</code>, i will use the <a href="https://github.com/rhyzx/vue-transfer-dom" target="_blank" rel="noreferrer nofollow">v-transfer-dom</a> directive</p>
      </div>
      <div class="c-item__code-wrapper" v-html="snippets.usage021"></div>
      <div class="c-play-around">
        <button v-off-canvas:toggle="fixedMenu">Open</button>
        <wv-off-canvas v-transfer-dom class="my-offcanvas" wrap-ref="main" ref="fixedMenu" align="right">
          <h1>Other menu</h1>
          <button v-off-canvas:toggle="fixedMenu">Close</button>
        </wv-off-canvas>
      </div>
      <div class="c-item__description">
        <p><strong>Note:</strong> Applying <code>transform</code> rule to an element will create a new stacking context, it affect the rendering of elements with position <code>fixed</code>. So we need to move the OffCanvas to the <code>body</code>, and that's it.</p>
      </div>
    </div>
  </section>
</template>

<script>
  import usage01 from 'src-docs/app/snippets/usage-01.md'
  import usage02 from 'src-docs/app/snippets/usage-02.md'
  import usage021 from 'src-docs/app/snippets/usage-021.md'

  export default {
    name: 'HomeUsagePage',
    data () {
      return {
        snippets: {
          usage01,
          usage02,
          usage021
        }
      }
    }
  }
</script>

<style lang="scss">
  .my-offcanvas {
    background-color: #2ecc40;
    padding: 2rem;
  }
</style>
