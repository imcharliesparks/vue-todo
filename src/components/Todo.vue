<template>
    <div class="container">
        <h1>{{ todo.description }}</h1>
        <h2>Status: {{ completed }}</h2>
        <button @click="updateTodo">Toggle Complete</button>
        <button @click="deleteTodo">Delete</button>
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
      return this.todo.completed ? 'Completed' : 'Not Completed'
    },
  },
  methods: {
    updateTodo() {
      // @ts-ignore
      this.$store.dispatch('updateTodo', this.todo.id)
    },
    deleteTodo() {
      // @ts-ignore
      this.$store.dispatch('deleteTodo', this.todo.id)
    },
  },
})
</script>

<style>
    .container {
        border: 1px solid black;
        margin: 20px auto;
        width: 70%;
        max-width: 400px;
    }
    button {
        margin: 0 5px 20px 5px;
        max-width: 200px;
    }
</style>
