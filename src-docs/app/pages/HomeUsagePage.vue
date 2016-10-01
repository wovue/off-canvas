<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Usage</h3>
    <div class="c-item u-gutter">
      <h4 class="c-item__heading">OffCanvas</h4>
      <div class="c-item__description">
        <p>First you have to create the <code>OffCanvas</code>, here's an example:</p>
      </div>
      <div class="c-item__code-wrapper" v-html="snippets.usageGuide01"></div>
      <div class="c-item__description">
        <p>So, now you can call the <code>OffCanvas</code>, there are three ways to handle it:</p>
      </div>
      <h5 class="c-item__sub-heading">Using the directive</h5>
      <div class="c-item__description">
        <p>The directive will add <code>'aria-expanded'</code> and <code>'aria-controls'</code> A11Y attributes.</p>
      </div>
      <div class="c-item__code-wrapper" v-html="snippets.usageGuide02"></div>
      <h5 class="c-item__sub-heading">Using the <code>$wv</code> instance</h5>
      <div class="c-item__description">
        <p>Only available if you installed it as a Plugin.</p>
      </div>
      <div class="c-item__code-wrapper" v-html="snippets.usageGuide03"></div>
      <h5 class="c-item__sub-heading">Importing the functions from src</h5>
      <div class="c-item__code-wrapper" v-html="snippets.usageGuide04"></div>
      <div class="c-item__description">
        <p>Here an examples:</p>
      </div>
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
  import usageGuide01 from 'src-docs/app/snippets/usage-guide01.md'
  import usageGuide02 from 'src-docs/app/snippets/usage-guide02.md'
  import usageGuide03 from 'src-docs/app/snippets/usage-guide03.md'
  import usageGuide04 from 'src-docs/app/snippets/usage-guide04.md'

  export default {
    name: 'HomeUsagePage',
    data () {
      return {
        snippets: {
          usage01,
          usage02,
          usage021,
          usageGuide01,
          usageGuide02,
          usageGuide03,
          usageGuide04
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
