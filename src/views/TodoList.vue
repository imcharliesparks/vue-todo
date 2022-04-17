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
//   setup() {
//     console.log('here')
//   },
  computed: {
    todos() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this.$store.getters.getCurrentTodos
    },
  },
  components: {
    Todo,
  },
})
</script>
