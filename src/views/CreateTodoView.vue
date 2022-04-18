<template>
    <div class="container">
        <h1>Create Todo</h1>
        <form @submit.prevent="submitTodo">
            <label for="description">
                Description
                <input id="description" placeholder="Enter your todo" v-model="description" />
            </label>
            <label for="completed">
                Completed?
                <select id="completed" v-model="completed">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </label>
            <button type="submit">Add Todo</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // setup() {

  // },
  name: 'CreateTodoView',
  data() {
    return {
      description: '',
      completed: 'No',
    }
  },
  methods: {
    async submitTodo() {
      const payload = {
        description: this.description,
        completed: this.completed === 'Yes',
      }
      // @ts-ignore
      await this.$store.dispatch('addTodo', payload)
      this.$router.push('/todolist')
    },
  },
})
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    label {
        margin: 5px 5px
    }
    button {
        margin-top: 5px;
        margin: 10px auto;
    }
</style>
