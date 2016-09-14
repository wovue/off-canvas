<template>
  <div>
    <wv-off-canvas-wrap ref="main">
      <sidebar></sidebar>
      <router-view></router-view>
      <gh-corner v-transfer-dom repo-user="wovue" repo-name="off-canvas" color="#E6E8EA" background="#35495E"></gh-corner>
    </wv-off-canvas-wrap>
  </div>
</template>

<script>
  import GhCorner from './GhCorner'
  import Sidebar from './Sidebar'

  export default {
    name: 'Root',
    components: {
      GhCorner,
      Sidebar
    }
  }
</script>
