<template>
  <main class="c-main" role="main">
    <section class="c-main__section">
      <h2 class="c-main__heading u-gutter">Main title</h2>
      <section class="c-main__sub-section">
        <h3 class="c-main__sub-heading u-gutter">Main sub title</h3>
        <div class="c-item u-gutter">
          <h4 class="c-item__heading">Item title</h4>
          <div class="c-item__description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <h5 class="c-item__sub-heading">Item sub title (code)</h5>
          <div class="c-item__code-wrapper" v-html="snippet"></div>
          <h5 class="c-item__sub-heading">Item sub title (table)</h5>
          <app-table class="c-item__table" :data="table"></app-table>
        </div>
      </section>
    </section>
    <app-footer></app-footer>
  </main>
</template>

<script>
  import snippet from 'src-docs/app/snippets/installation.md'

  export default {
    name: 'DocsExamplePage',
    data () {
      return {
        snippet,
        table: [
          {
            name: 'David',
            gender: 'Male',
            code: '`0132`',
            status: false
          }, {
            name: 'Other',
            gender: 'Male',
            code: '`123`',
            status: ''
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  // _components.main.scss
  // _components.item.scss
</style>
