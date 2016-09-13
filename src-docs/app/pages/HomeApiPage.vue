<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">API</h3>
    <div class="c-item u-gutter">
      <h4 class="c-item__heading">OffCanvas</h4>
      <h5 class="c-item__sub-heading">Props</h5>
      <app-table class="c-item__table" :data="tables.props"></app-table>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomePage',
    data () {
      return {
        tables: {
          props: [
            {
              name: 'modifier',
              type: '`string`',
              required: 'true',
              default: '`""`'
            }
          ]
        }
      }
    }
  }
</script>
