<template>
    <div class="container">
        <h1>{{ todo.description }}</h1>
        <h2>Status: {{ completed }}</h2>
        <button>Toggle Complete</button>
        <button>Delete</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
/* eslint-disable @typescript-eslint/ban-ts-comment */

export default defineComponent({
  name: 'ToDo',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    completed() {
      return this.todo.status ? 'Completed' : 'Not Completed'
    },
  },
})
</script>

<style>
    .container {
        border: 1px solid black;
        margin: 0 auto;
        width: 50%;
        max-width: 400px;
    }
    button {
        margin: 0 5px 20px 5px;
    }
</style>
