import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Compra from '@/pages/Compra';

Vue.use(VueRouter)

const routes = [
  {
    path: '/paquetes/:pago?',
    name: 'home',
    component: Home,
    props: true
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