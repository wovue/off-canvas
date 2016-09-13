<template>
  <div>
    <sidebar></sidebar>
    <router-view></router-view>
    <gh-corner repo-user="wovue" repo-name="off-canvas" color="#EAE8EB" background="#dd5a6f"></gh-corner>
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
