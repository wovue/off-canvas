<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Default</h3>
    <div class="c-item u-gutter">
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper" v-html="snippets.defaultExample"></div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <off-canvas></off-canvas>
    </div>
  </section>
</template>

<script>
  import defaultExample from 'src-docs/app/snippets/default-example.md'

  export default {
    name: 'ExamplesDefaultPage',
    data () {
      return {
        snippets: {
          defaultExample
        }
      }
    }
  }
</script>
