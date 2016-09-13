<template>
  <header class="c-sidebar">
    <h1 class="c-sidebar__header">
      <a href="#!">off-canvas</a>
    </h1>
    <nav class="c-sidebar__body" role="navigation">
      <ul class="o-reset-list">
        <li class="c-sidebar__item c-sidebar__item--heading">
          <a v-link="{name: 'Home', exact: true}">Getting started</a>
        </li>
        <li>
          <ul class="o-reset-list">
            <li class="c-sidebar__item c-sidebar__item--sub-heading">
              <a v-link="{name: 'HomeDefaultPage', exact: true}">Installation</a>
            </li>
            <li class="c-sidebar__item c-sidebar__item--sub-heading">
              <a v-link="{name: 'HomeUsagePage'}">Usage</a>
            </li>
            <li class="c-sidebar__item c-sidebar__item--sub-heading">
              <a v-link="{name: 'HomeApiPage'}">Api</a>
            </li>
          </ul>
        </li>
        <li class="c-sidebar__item c-sidebar__item--heading">
          <a v-link="{name: 'Examples'}">Examples</a>
        </li>
        <li>
          <ul class="o-reset-list">
            <li class="c-sidebar__item c-sidebar__item--sub-heading">
              <a v-link="{name: 'ExamplesDefaultPage', exact: true}">Default</a>
            </li>
            <li class="c-sidebar__item c-sidebar__item--sub-heading">
              <a v-link="{name: 'ExamplesPrimaryPage'}">Primary</a>
            </li>
          </ul>
        </li>
        <li class="c-sidebar__item c-sidebar__item--heading">
          <a v-link="{name: 'DocsExample'}">Page boilerplate</a>
        </li>
        <li class="c-sidebar__item c-sidebar__item--heading">
          <a v-link="{name: 'DocsMarkdownExample'}">Markdown page boilerplate</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  // _components.sidebar.scss
</style>
