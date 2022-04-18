<template>
    <div v-if="todos.length">
        <Todo v-for="(todo, index) in todos" :key="index" :todo="todo" />
    </div>
    <div v-else>
        <h1>No todos for today!</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Todo from '../components/Todo.vue'

export default defineComponent({
  computed: {
    todos() {
      // @ts-ignore
      return this.$store.getters.getCurrentTodos
    },
  },
  created() {
    // @ts-ignore
    this.$store.dispatch('init')
  },
  components: {
    Todo,
  },
})
</script>
