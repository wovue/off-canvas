```html
<template>
  <div>
    ...
    <wv-off-canvas
      class="nav"
      ref="nav"
      wrap-ref="main"
      overlay-background="transparent"
      @opened="onOpen"
      v-transfer-dom
    >
      <h1>Navigation</h1>
      <a v-off-canvas:toggle="nav" href="/#!/examples/real-world">Link to someplace</a>
    </wv-off-canvas>
    <button v-off-canvas:toggle="nav" type="button">Open Nav</button>
  </div>
</template>

<script>
  export default {
    // ...
    methods: {
      onOpen () {
        window.alert('OffCanvas opened')
      }
    }
  }
</script>

<style lang="scss">
  .nav {
    background-color: #400255;
    color: #ffffff;
    padding: 2rem 0;
    text-align: center;
  }
</style>
```
