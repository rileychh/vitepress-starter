<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button
    class="increment-button"
    @click="increment"
  >
    {{ count }}
  </button>
</template>

<style>
.increment-button {
  font-size: 1.5em;
  padding: 0.5em 1em;
  border: 1px solid #ccc;
  border-radius: 0.25em;
}
</style>
