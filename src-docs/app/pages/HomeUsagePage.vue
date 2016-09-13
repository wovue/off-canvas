<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Usage</h3>
    <div class="c-item u-gutter">
      <div class="c-item__description">
        <p>Here's an example:</p>
      </div>
      <h4 class="c-item__heading">OffCanvas</h4>
      <div class="c-item__code-wrapper" v-html="snippets.primaryExample"></div>
      <div class="c-item__description">
        <p>That's it!</p>
      </div>
    </div>
  </section>
</template>

<script>
  import primaryExample from 'src-docs/app/snippets/primary-example.md'

  export default {
    name: 'HomeUsagePage',
    data () {
      return {
        snippets: {
          primaryExample
        }
      }
    }
  }
</script>
