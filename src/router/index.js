import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue';
import About from '../components/About.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/about', component: About },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
