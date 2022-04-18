/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
/* eslint-disable max-len */
import { createStore } from 'vuex';
import { v4 } from 'uuid'
import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000/todos',
  timeout: 1000,
  headers: {
    Accept: 'application/json'
  }
});

export type Todo = {
  description: string,
  id: string,
  completed: boolean
}

export interface State {
  todos: Todo[]
}

export default createStore<State>({
  state: {
    todos: [],
  },
  getters: {
    getCurrentTodos(state) {
      return state.todos
    },
  },
  mutations: {
    async ADD_TODO(state: State, todo: Todo) {
      const newTodo = {
        ...todo,
        id: v4()
      }
      try {
        await client.post('', newTodo)
      } catch (e) {
        console.log(e)
      }
    },
    async UPDATE_TODO(state: State, todoId: string) {
      const currentTodo = state.todos.find((todo: Todo) => todo.id === todoId)
      const postTodo = {
        ...currentTodo,
        completed: !currentTodo!.completed
      }
      try {
        await client.put(`/${todoId}`, postTodo)
        const { data } = await client.get('')
        state.todos = data
      } catch (error) {
        console.log(error)
      }
    },
    async DELETE_TODO(state: State, todoId: string) {
      try {
        await client.delete(`/${todoId}`)
        const { data } = await client.get('')
        state.todos = data
      } catch (error) {
        console.log(error)
      }
    },
    async INIT(state) {
      const { data } = await client.get('')
      state.todos = data
    }
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
    init({ commit }) {
      commit('INIT')
    }
  },
  modules: {
  },
});
