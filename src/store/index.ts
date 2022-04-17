/* eslint-disable max-len */
import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [
      {
        description: 'first todo',
        completed: false,
      },
    ],
  },
  getters: {
    getCurrentTodos(state) {
      return state.todos
    },
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo)
    },
    UPDATE_TODO(state, todo) {
      state.todos = state.todos.map((currentTodo) => {
        if (currentTodo.description === todo.description) {
          return { ...currentTodo, completed: !currentTodo.completed }
        }
        return currentTodo
      })
    },
    DELETE_TODO(state, todo) {
      // eslint-disable-next-line operator-linebreak
      state.todos =
        state.todos.filter((currentTodo) => currentTodo.description !== todo.description)
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo)
    },
    updateTodo({ commit }, todo) {
      commit('UPDATE_TODO', todo)
    },
    deleteTodo({ commit }, todo) {
      commit('DELETE_TODO', todo)
    },
  },
  modules: {
  },
});
