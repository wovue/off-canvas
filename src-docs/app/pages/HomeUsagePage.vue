<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Usage</h3>
    <div class="c-item u-gutter">
      <div class="c-item__description">
        <p>Here's an example:</p>
      </div>
      <h4 class="c-item__heading">OffCanvas</h4>
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper" v-html="snippets.usage01"></div>
      <div class="c-item__description">
        <p>That's it!</p>
      </div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <div class="c-play-around">
        <button v-off-canvas:toggle="menu">Open menu</button>
        <wv-off-canvas ref="menu">
          <h1 style="color: red">Ref</h1>
          <button v-off-canvas:toggle="menu" style="background: red; color: white">Close menu</button>
        </wv-off-canvas>
      </div>
      <h4 class="c-item__heading">OffCanvas and offCanvasWrap</h4>
      <div class="c-item__description">
        <p>You can optionally push your content when the OffCanvas is open, and add styles</p>
      </div>
      <div class="c-item__code-wrapper" v-html="snippets.usage02"></div>
      <div class="c-play-around">
        <button v-off-canvas:toggle="otherMenu">Open menu</button>
        <wv-off-canvas class="my-offcanvas" wrap-ref="main" ref="otherMenu" align="right">
          <h1>Ref</h1>
          <button v-off-canvas:toggle="otherMenu" style="background: #ff4136; color: white">Close menu</button>
        </wv-off-canvas>
      </div>
      <div class="c-item__description">
        <p>and that's it!...... oohhh wait</p>
        <p>We will fix it, moving the OffCanvas to the body, using the <a href="https://github.com/rhyzx/vue-transfer-dom" target="_blank" rel="noreferrer nofollow">v-transfer-dom</a> directive</p>
      </div>
      <div class="c-item__code-wrapper" v-html="snippets.usage021"></div>
      <div class="c-play-around">
        <button v-off-canvas:toggle="fixedMenu">Open fixed menu</button>
        <wv-off-canvas v-transfer-dom class="my-offcanvas" wrap-ref="main" ref="fixedMenu" align="right">
          <h1>Ref</h1>
          <button v-off-canvas:toggle="fixedMenu" style="background: #ff4136; color: white">Close menu</button>
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
