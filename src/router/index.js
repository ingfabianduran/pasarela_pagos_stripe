import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Compra from '@/pages/Compra';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/compra/:status',
    name: 'compra',
    component: Compra,
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;