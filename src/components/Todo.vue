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
      console.log('this.todos.status', this.todo.completed)
      return this.todo.completed ? 'Completed' : 'Not Completed'
    },
  },
  methods: {
    updateTodo() {
      this.$store.dispatch('updateTodo', this.todo)
    },
    deleteTodo() {
      this.$store.dispatch('deleteTodo', this.todo)
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
