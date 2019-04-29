import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false

import Home from './components/screens/Home'
import SubMenu from './components/screens/SubMenu'

//set vue routes
const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'submenu',
        path: '/submenu/:id',
        component: SubMenu
    }
]

const router = new VueRouter({ mode: 'history', routes: routes });
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
