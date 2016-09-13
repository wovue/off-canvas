<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in columns" scope="col"><span class="o-screen-reader">{{ heading }} </span>{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data">
        <td v-for="column in columns" scope="row" :data-label="column">{{{ row[column] ? marked(row[column]) : empty }}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import marked from 'marked'

  export default {
    data () {
      return {
        empty: '—<span class="o-screen-reader">none</span>'
      }
    },
    props: [
      {
        name: 'data',
        type: Array,
        required: true
      }
    ],
    computed: {
      columns () {
        // get columns array from data prop keys
        if (!this.data.length) {
          return []
        }

        // return all keys from first object in data
        return Object.keys(this.data[0])
      }
    },
    methods: {
      marked (markdown) {
        return marked(markdown)
      }
    }
  }
</script>

<style lang="scss">
  // _base.table.scss
  // _components.item.scss
</style>
