<template>
  <main class="c-main">
    <article class="markdown-body c-markdown-body u-gutter" v-html="docsMarkdownExample"></article>
    <app-footer></app-footer>
  </main>
</template>

<script>
  import docsMarkdownExample from 'src-docs/app/snippets/docs-markdown-example.md'

  export default {
    name: 'DocsMarkdownExamplePage',
    data () {
      return {
        docsMarkdownExample
      }
    }
  }
</script>

<style lang="scss">
  // main.scss
  // @import "~github-markdown-css";
  // _components.markdown-body.scss
</style>
