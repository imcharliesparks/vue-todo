import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TodoList from '../views/TodoList.vue'
import CreateTodoView from '../views/CreateTodoView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList,
  },
  {
    path: '/create-todo',
    name: 'CreateTodoView',
    component: CreateTodoView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
