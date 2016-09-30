<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Installation</h3>
    <div class="c-item u-gutter">
      <div class="c-item__description">
        <p>You have two ways to setup <code>wovue-off-canvas</code>:</p>
      </div>
      <h4 class="c-item__heading">NPM</h4>
      <div class="c-item__code-wrapper" v-html="snippets.installation"></div>
      <h5 class="c-item__sub-heading">CommonJS (Webpack/Browserify)</h5>
      <div class="c-item__description">
        <p>If you are working with <code>Browserify</code>, you will have to add the <code>css</code> separately.</p>
      </div>
      <div class="c-item__code-wrapper" v-html="snippets.installationCommonjs"></div>
      <div class="c-item__description">
        <p>Alternatively you can add it to your components options.</p>
      </div>
      <div class="c-item__code-wrapper" v-html="snippets.installationCommonjsAlternative"></div>
      <div class="c-item__description">
        <p>or register the components and the directive with other names.</p>
      </div>
      <div class="c-item__code-wrapper" v-html="snippets.installationCommonjsAlternative2"></div>
      <h4 class="c-item__heading">Direct include (Browser)</h4>
      <div class="c-item__description">
        <p>Include it directly with a <code>&lt;script&gt;</code> tag. In this case, you don't need to write <code>Vue.use(OffCanvas)</code>, this will be done automatically for you.</p>
      </div>
      <div class="c-item__code-wrapper" v-html="snippets.installationInclude"></div>
    </div>
  </section>
</template>

<script>
  import installation from 'src-docs/app/snippets/installation.md'
  import installationInclude from 'src-docs/app/snippets/installation-include.md'
  import installationCommonjs from 'src-docs/app/snippets/installation-commonjs.md'
  import installationCommonjsAlternative from 'src-docs/app/snippets/installation-commonjs-alternative.md'
  import installationCommonjsAlternative2 from 'src-docs/app/snippets/installation-commonjs-alternative2.md'

  export default {
    name: 'HomeDefaultPage',
    data () {
      return {
        snippets: {
          installationInclude,
          installation,
          installationCommonjs,
          installationCommonjsAlternative,
          installationCommonjsAlternative2
        }
      }
    }
  }
</script>
