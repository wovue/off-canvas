<template>
  <main class="c-main" role="main">
    <section class="c-main__section">
      <h2 class="c-main__heading u-gutter">Examples</h2>
      <router-view></router-view>
    </section>
    <app-footer></app-footer>
  </main>
</template>

<script>
  export default {
    name: 'Examples'
  }
</script>
