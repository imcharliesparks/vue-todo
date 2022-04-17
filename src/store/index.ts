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
  },
  actions: {
  },
  modules: {
  },
});
