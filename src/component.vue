<template>
  <div class="counter" :class="`counter--${modifier}`">
    <button @click="counter += 1" type="button" aria-label="increment">+</button>
    <input v-model="counter" type="text" disabled="true"/>
    <button @click="counter -= 1" type="button" aria-label="decrement">-</button>
  </div>
</template>

<script>
  export default {
    props: [
      {
        name: 'modifier',
        type: String,
        default: ''
      }
    ],
    data () {
      return {
        counter: 0
      }
    }
  }
</script>

<style lang="scss">
.counter {
  background-color: #D1D5D8;
  color: #ffffff;
  display: inline-block;
  font-size: 2rem;
  text-align: center;
  user-select: none;

  input,
  button {
    display: inline-block;
    vertical-align: middle;
  }

  input {
    text-align: center;
    width: 50px;
  }

  button {
    outline: none;
    padding: .5em;
    transition: transform 60ms ease-out;
    width: 50px;

    &:active {
      transform: translateY(2px);
      transition: transform 100ms ease-out;
    }
  }
}


.counter--primary {
  background-color: #E04938;
}
</style>
